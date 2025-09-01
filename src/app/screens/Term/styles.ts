import { StyleSheet } from "react-native";
import { colors } from "@/Theme/colors";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: colors.black,
    alignItems: "center",
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  contentTerm: {
    width: "100%",
    height: 442,
    backgroundColor: colors.white,
    borderRadius: 19,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12
  }
});
