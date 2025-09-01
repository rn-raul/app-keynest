import AsyncStorage from "@react-native-async-storage/async-storage";

const ITEMS_STORAGE_KEY = "@keynest:items"

export type ItemStorage = {
    id: string;
    service: string;
    email: string;
    password: string;
}

async function get(): Promise<ItemStorage[]>{
    try {
        const storage = await AsyncStorage.getItem(ITEMS_STORAGE_KEY)
       return storage ? JSON.parse(storage) : []
    } catch (error) {
        throw new Error("Failed to retrieve items from storage")
    }
}
async function save(items: ItemStorage[]) {
    try {
        await AsyncStorage.setItem(ITEMS_STORAGE_KEY, JSON.stringify(items))
    } catch (error) {
        throw new Error("Failed to save items to storage")
    }
}
async function add(newItem: ItemStorage): Promise<ItemStorage[]> {
    try {
        const items = await get();
        const updatedItems = [...items, newItem];
        await save(updatedItems);
        return updatedItems;
    } catch (error) {
        throw new Error("Failed to add item to storage")
    }
}
async function remove(id: string) {
  try {
    const items = await get();
    const updatedItems = items.filter((item) => item.id !== id);
    await save(updatedItems);
  } catch (error) {
    throw new Error("Failed to remove item from storage");
  }
}
export const itemsStorage = {
    get,
    save,
    add,
    remove
}