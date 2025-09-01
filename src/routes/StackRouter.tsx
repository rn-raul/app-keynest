import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { View, ActivityIndicator, Text } from "react-native";
import { Home } from "@/app/screens/Home";
import { Term } from "@/app/screens/Term";
import { NewPassword } from "@/app/screens/NewPassword";
import { Details } from "@/app/screens/Details";
import * as LocalAuthentication from 'expo-local-authentication';
import { hasAcceptedTerms } from "@/storage/authStorage";

const Stack = createNativeStackNavigator();

export function StackRouter() {
  const [loading, setLoading] = useState(true);
  const [accepted, setAccepted] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    async function checkTerms() {
      const result = await hasAcceptedTerms();
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setAccepted(result);
      if (result) {
        const authResult = await LocalAuthentication.authenticateAsync({
          promptMessage: 'Autentique-se para acessar suas senhas',
        });
        setAuthenticated(authResult.success);
      }
      setLoading(false);
    }
    checkTerms();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  if (accepted && !authenticated) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Autenticação necessária para acessar o app.</Text>
      </View>
    );
  }
  return (
    <Stack.Navigator
      initialRouteName={accepted ? "Home" : "Term"}
      screenOptions={{ headerShown: false }}
    >
      {/* Registramos todas as telas */}
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
      <Stack.Screen name="Term" component={Term} />
    </Stack.Navigator>
  );
}
