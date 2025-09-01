import { View, TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";
import { colors } from "@/Theme/colors";
import {MaterialIcons} from "@expo/vector-icons"

type Props = TextInputProps & {
    icon?: keyof typeof MaterialIcons.glyphMap
    color: keyof typeof colors
}
export function Input({icon, color, ...rest}: Props){
    return (
        <View style={styles.container}>
            <MaterialIcons name={icon} size={20} color={colors[color]}/>
            <TextInput 
            {...rest}
            placeholderTextColor={colors.neutralGray}
            style={styles.input}
             />
        </View>
    )
}