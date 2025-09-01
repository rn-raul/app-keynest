import { StyleSheet } from "react-native";
import { colors } from "@/Theme/colors";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 26
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.white,
        flex: 1
    },
    subtitle: {
        fontSize: 19,
        fontWeight: 'regular',
        color: colors.neutralGray,
    },
    headerContent: {
        gap: 12,
        flexDirection: 'row',
        alignItems: 'center',
    }
})