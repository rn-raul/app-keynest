import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import {MaterialIcons} from "@expo/vector-icons"

type Props = TouchableOpacityProps & {
    pencil?: boolean;
}
export function BackButton({pencil = false, ...rest}: Props) {
    return (
        <TouchableOpacity
        style={{flex: 1}}
         {...rest}>
            <MaterialIcons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
    )
}