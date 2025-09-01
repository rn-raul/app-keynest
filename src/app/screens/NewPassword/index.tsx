import { View, Text, Alert } from "react-native";
import { styles } from "./styles";
import { Input } from "@/app/components/Input";
import { Button } from "@/app/components/Button";
import { useState } from "react";
import { BackButton } from "@/app/components/BackButton";
import { useNavigation } from "@react-navigation/native";
import { itemsStorage } from "@/storage/itemsStorage";
export function NewPassword() {
  const [service, setService] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();
  async function handleCreateNewPassword() {
    if (!service || !email || !password) {
      return Alert.alert("Atenção", "Preencha todos os campos!");
    }
    const newItem = {
      id: Date.now().toString() + Math.floor(Math.random() * 1000).toString(),
      service,
      email,
      password
    }
    await itemsStorage.add(newItem)
    Alert.alert("Sucesso", "Senha salva com sucesso!")
    navigation.navigate("Home")
  }
  function handleBack() {
    if (service || email || password) {
      Alert.alert("Atenção", "Tem certeza que deseja voltar?", [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Confirmar",
          onPress: () => navigation.navigate("Home"),
        },
      ]);
    } else {
      navigation.navigate("Home");
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerBack}>
        <BackButton onPress={handleBack} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Insira os Dados</Text>
        <View style={{ gap: 12, marginTop: 12, marginBottom: 12 }}>
          <Input
            placeholder="Serviço"
            icon="room-service"
            color="white"
            value={service}
            onChangeText={setService}
          />
          <Input
            placeholder="E-mail"
            icon="email"
            color="white"
            value={email}
            onChangeText={setEmail}
          />
          <Input
            placeholder="Password"
            icon="lock"
            color="white"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <Button title="Criar e Salvar" onPress={handleCreateNewPassword} />
      </View>
    </View>
  );
}
