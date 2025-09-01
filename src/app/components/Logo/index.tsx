import { Image } from "react-native";
import { StyleSheet } from "react-native";
export function Logo() {
    return (
        <Image 
        style={styles.logo}
        source={require("../../../assets/logo.png")}/>
    )
}
const styles = StyleSheet.create({
    logo: {
        width: 79 ,
        height: 91,
        marginBottom: 20
    }
})