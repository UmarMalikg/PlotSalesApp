import { StyleSheet, Platform } from "react-native";

const isWeb = Platform.OS === "web";

const dataStyles = StyleSheet.create({
  dataHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    ...(isWeb && {
      marginHorizontal: 30,
    }),
  },
  hederTitle: {
    fontSize: isWeb ? 22 : 19,
    fontWeight: "bold",
  },

  allDataWrapper: {
    ...(isWeb && {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      padding: 20,
    }),
  },
  dataWrapper: {
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    margin: 10,

    // For Android
    elevation: 4,

    // Common styles
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#fff",
  },

  singleData: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  dataTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  data: {
    fontSize: 16,
  },

  button: {
    backgroundColor: "#7d00b9",
    borderRadius: 3,
    cursor: "pointer",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: isWeb ? 20 : 7,
    marginVertical: 20,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 14,
    color: "white",
  },
});

export default dataStyles;
