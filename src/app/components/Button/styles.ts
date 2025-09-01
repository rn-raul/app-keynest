import { StyleSheet } from "react-native";
import { colors } from "@/Theme/colors";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 64,
        borderRadius: 19,
        backgroundColor: colors.skyblue,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        color: colors.white,
        fontSize: 16,
        fontWeight: "regular"
    }
})