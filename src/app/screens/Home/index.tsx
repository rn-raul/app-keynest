import { FlatList, View, Text, Alert, BackHandler  } from "react-native";
import { styles } from "./styles";
import { Header } from "@/app/components/Header";
import { Input } from "@/app/components/Input";
import { CardItem } from "@/app/components/CardItem";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ItemStorage, itemsStorage } from "@/storage/itemsStorage";
export function Home() {
  const [itemSearch, setItemSearch] = useState<ItemStorage[]>([]);
  const [items, setItems] = useState<ItemStorage[]>([]);
  const navigation = useNavigation();

  async function loadItems() {
    try {
      const storedItems = await itemsStorage.get();
      setItems(storedItems);
      setItemSearch(storedItems);
    } catch (error) {
      console.error("Failed to load items:", error);
      Alert.alert("Atenção", "Não foi possível carregar os itens.");
    }
  }
  async function handleRemoveItem(id: string) {
    try {
      await itemsStorage.remove(id);
      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
          setItemSearch((prev) => prev.filter((item) => item.id !== id));

    } catch (error) {
      console.error("Failed to remove item:", error);
      Alert.alert("Atenção", "Não foi possível remover o item.");
    }
  }
  async function handleSearchItem(service: string) {
    if (!service) {
      // se não digitou nada → mostra tudo
      setItems(itemSearch);
      return;
    }

    const filteredItems = itemSearch.filter((item) =>
      item.service.toLowerCase().includes(service.toLowerCase())
    );
    setItems(filteredItems);
  }
  useEffect(() => {
    loadItems();
  }, []);
  return (
    <View style={styles.container}>
      <Header
        add={() => navigation.navigate("NewPassword")}
        logout={() => BackHandler.exitApp()}
      />
      <View style={{ marginBottom: 32 }}>
        <Input icon="search" placeholder="Buscar senha" color="neutralGray" onChangeText={handleSearchItem}/>
      </View>
      <View style={{ width: "100%", flex: 1, marginBottom: 50 }}>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CardItem
              title={item.service}
              itemPress={() => navigation.navigate("Details", { id: item.id })}
              trashPress={() => handleRemoveItem(item.id)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.emptyText}>Nenhuma senha salva!</Text>
          )}
          contentContainerStyle={{ paddingBottom: 120 }}
        />
      </View>
    </View>
  );
}
