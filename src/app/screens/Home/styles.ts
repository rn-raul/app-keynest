import { StyleSheet } from "react-native";
import { colors } from "@/Theme/colors";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: colors.black,
    alignItems: "center",
    paddingTop: 64,
    paddingHorizontal: 24,
  },
  emptyText: {
    fontSize: 14,
    color: "#828282",
    textAlign: "center",
  },
});
