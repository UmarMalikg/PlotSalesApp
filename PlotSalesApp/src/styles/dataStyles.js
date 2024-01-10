import { StyleSheet, Platform } from "react-native";

const isWeb = Platform.OS === "web";

const dataStyles = StyleSheet.create({
  headerPosition: {
    position: "absolute",
    left: 0,
    rigt: 0,
    top: 0,
    width: "100%",
    zIndex: 1000,
  },
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

  dataPosition: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 50,
    height: "90vh",
    width: "100vw",
  },

  dataGrids: {
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

  //styles for categories and payment methods data pages

  catPaygrids: {
    display: "grid",
    gridTemplateColumns: isWeb ? "1fr 1fr 1fr 1fr 1fr" : "1fr 1fr",
    padding: isWeb ? 20 : 10,
  },

  catPayDataWrapper: {
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    margin: 10,

    height: 80,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // For Android
    elevation: 4,

    // Common styles
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#fff",
  },

  catPayData: {
    fontSize: 20,
    fontWeight: "bold",
  },

  barcodePosition: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default dataStyles;
