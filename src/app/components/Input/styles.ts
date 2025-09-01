import { StyleSheet } from "react-native";
import { colors } from "@/Theme/colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: 59,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.darkGray,
    borderRadius: 9,
    paddingHorizontal: 16,
  },
  input: {
    flex: 1,
    borderRadius: 9,
    width: "100%",
    marginLeft: 8,
    fontSize: 16,
    color: colors.white,
  },
});
