import { View, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";
type Props = TouchableOpacityProps & {
    title: string;
}
export function Button({ title, ...rest }: Props){
    return (
        <TouchableOpacity {...rest} style={[styles.container, { opacity: rest.disabled ? 0.5 : 1 }]}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

