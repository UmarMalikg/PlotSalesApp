import { StyleSheet, Platform } from "react-native";

const isWeb = Platform.OS === "web";

const dashboardStyles = StyleSheet.create({
  dashboard: {
    ...(isWeb && {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr", // Fix the typo here
      padding: 20,
    }),
  },
  dashboardLink: {
    height: 150,
    ...(isWeb && {
      marginHorizontal: 20,
      marginVertical: 10,
    }),
    backgroundColor: "#cb5166",
  },
  linkTextPosition: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    padding: 10,
    backgroundColor: "#c23144",
  },
  linkText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#343434",
  },
});

export default dashboardStyles;
