import AsyncStorage from "@react-native-async-storage/async-storage";


const TERMS_KEY = "@keynest:termsAccepted"

export async function acceptTerms() {
  try {
    await AsyncStorage.setItem(TERMS_KEY, "true");
    console.log("Terms accepted and stored");
  } catch (error) {
    throw new Error("Failed to accept terms");
  }
}
export async function hasAcceptedTerms(): Promise<boolean> {
  const stored = await AsyncStorage.getItem(TERMS_KEY);
  console.log("Terms acceptance status:", stored);
  return stored === "true";
}