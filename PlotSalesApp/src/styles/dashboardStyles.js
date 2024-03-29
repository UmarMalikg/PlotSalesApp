import { StyleSheet, Platform } from "react-native";

const isWeb = Platform.OS === "web";

const dashboardStyles = StyleSheet.create({
  dashboard: {
    ...(isWeb && {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
      padding: 20,
    }),
  },
  dashboardLink: {
    height: 150,
    marginVertical: 10,
    marginHorizontal: isWeb ? 20 : 10,
  },
  linkTextPosition: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    padding: 10,
  },
  linkText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#343434",
  },
});

export default dashboardStyles;
