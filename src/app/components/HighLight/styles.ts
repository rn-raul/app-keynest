import { StyleSheet } from "react-native";
import { colors } from "@/Theme/colors";

export const styles = StyleSheet.create({
    container: {
       width: "100%",
       justifyContent: "center",
       alignItems: "center",
       marginBottom: 20
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: colors.white
    },
    subtitle: {
        fontSize: 20,
        fontWeight: "regular",
        color: colors.neutralGray
    }
});