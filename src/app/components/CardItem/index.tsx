import { View, TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import {MaterialIcons, FontAwesome5} from "@expo/vector-icons"
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
    title: string;
    itemPress: () => void;
    trashPress: () => void;
}
export function CardItem({ title, itemPress, trashPress, ...rest }: Props){
    return (
        <View style={styles.container} {...rest}>
            <MaterialIcons name="lock" size={18} color="white" />
            <TouchableOpacity style={styles.buttonCard} onPress={itemPress}>
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={trashPress} style={styles.buttonTrash}>
                <FontAwesome5 name="trash-alt" size={18} color="#CD0000" />
            </TouchableOpacity>
        </View>
    )
}