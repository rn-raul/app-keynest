import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/Theme/colors";

type Props = {
  add: () => void;
  logout: () => void;
};
export function Header({ add, logout}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContent}>
        <Text style={styles.title}>Olá</Text>
        <TouchableOpacity onPress={add}>
          <MaterialIcons name="add" size={30} color={colors.skyblue} />
        </TouchableOpacity>
        <TouchableOpacity onPress={logout}>
          <MaterialIcons name="logout" size={30} color={"#CD0000"} />
        </TouchableOpacity>
      </View>
      <Text style={styles.subtitle}>Aqui estão suas senhas!</Text>
    </View>
  );
}
