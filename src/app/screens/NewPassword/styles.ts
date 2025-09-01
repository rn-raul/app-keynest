import { StyleSheet } from "react-native";
import { colors } from "@/Theme/colors";
export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: colors.black,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.white,
  },
  content: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 24,
    justifyContent: 'center'
  },
  headerBack: {
    paddingTop: 64,
    paddingHorizontal: 24,
    position: "absolute",}
});
