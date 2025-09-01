import { StyleSheet } from "react-native";
import { colors } from "@/Theme/colors";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        height: 64,
        borderRadius: 9,
        backgroundColor: colors.darkGray,
        alignItems: 'center',
        paddingHorizontal: 16,
        marginBottom: 12
    },
    title: {
        
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.white,
        marginLeft: 12,
    },
    buttonCard: {
        
        flex: 1,
    },
    buttonTrash: {
        width: 32,
        height: 64,
        justifyContent: 'center',
        alignItems: 'center',
    }
})