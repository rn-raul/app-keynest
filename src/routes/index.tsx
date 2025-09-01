import { NavigationContainer } from "@react-navigation/native";
import { StackRouter } from "./StackRouter";
import { View } from "react-native";
import { colors } from "@/Theme/colors";
export function Routes() {
    return (
        <View style={{ flex: 1, backgroundColor: colors.black }}>
            <NavigationContainer>
                <StackRouter />
            </NavigationContainer>
        </View>
    );
}
