import { View, Text, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";
import { BackButton } from "@/app/components/BackButton";
import { Input } from "@/app/components/Input";
import { Button } from "@/app/components/Button";
import { MaterialIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ItemStorage, itemsStorage } from "@/storage/itemsStorage";
import { useRoute } from "@react-navigation/native";
export function Details() {
  const [service, setService] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const route = useRoute();
  const { id } = route.params as { id: string };

  const [isEditable, setIsEditable] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const navigation = useNavigation();

  async function loadItem() {
    try {
      const storedItems = await itemsStorage.get();
      const found = storedItems.find((i: ItemStorage) => i.id === id);
      if (found) {
        setService(found.service);
        setEmail(found.email);
        setPassword(found.password);
      }
    } catch (error) {
      Alert.alert("Atenção", "Não foi possível carregar o item.");
    }
  }
  function handleEdit() {
    setIsEditable(true);
  }
  function viewPassword() {
    setSecureTextEntry(!secureTextEntry);
  }
  async function saveItem() {
    try {
      const storedItems = await itemsStorage.get();

      const updatedItems = storedItems.map((i: ItemStorage) =>
        i.id === id ? { ...i, service, email, password } : i
      );

      await itemsStorage.save(updatedItems); // precisa de um método save que sobrescreve todos
      setIsEditable(false);
      Alert.alert("Sucesso", "Item atualizado com sucesso.");
    } catch (error) {
      Alert.alert("Atenção", "Não foi possível salvar o item.");
    }
  }
  useEffect(() => {
    loadItem();
  }, [id]);
  return (
    <View style={styles.container}>
      <View style={styles.headerButtons}>
        <BackButton onPress={() => navigation.navigate("Home")} />
        <TouchableOpacity onPress={viewPassword}>
          <MaterialIcons name="remove-red-eye" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleEdit}>
          <MaterialIcons name="edit" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Detalhes da Senha</Text>
        <View style={{ gap: 12, marginTop: 12, marginBottom: 12 }}>
          <Input
            placeholder="Serviço"
            icon="room-service"
            color="white"
            value={service}
            editable={isEditable}
            onChangeText={setService}
          />
          <Input
            placeholder="E-mail"
            icon="email"
            color="white"
            value={email}
            editable={isEditable}
            onChangeText={setEmail}
          />
          <Input
            placeholder="Password"
            icon="lock"
            color="white"
            secureTextEntry={secureTextEntry}
            value={password}
            editable={isEditable}
            onChangeText={setPassword}
          />
        </View>
        <Button title="Salvar" disabled={!isEditable} onPress={saveItem} />
      </View>
    </View>
  );
}
