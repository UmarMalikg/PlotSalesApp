import { StyleSheet, Platform } from "react-native";

const isWeb = Platform.OS === "web";

const formStyles = StyleSheet.create({
  title: {
    fontSize: 22,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  model: {
    backgroundColor: "#fff",
    position: "fixed",
    left: "5%",
    top: "5%",
    ...(isWeb && {}),
    width: isWeb ? "80vw" : "90%",
    height: isWeb ? "80vh" : "90%",
    transform: [
      { translateX: isWeb ? -40 + 112 : -3 }, // Adjust this value based on half of the modal width
      { translateY: isWeb ? -30 + 35 : 5 }, // Adjust this value based on half of the modal height
    ],
  },
  padder: {
    padding: isWeb ? 30 : 20,
  },
  closeButton: {
    position: "absolute",
    right: 0,
    top: 0,
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: "#ddd",
    fontSize: 20,
    ...(isWeb && { cursor: "pointer" }),
    zIndex: 1000,
  },

  allInputs: {
    display: "grid",
    ...(isWeb && {
      gridTemplateColumns: "1fr 1fr 1fr", // Adjust the number of columns as needed
      gridColumnGap: 16, // Adjust the column gap value as needed
      gridRowGap: 16,
    }),
  },

  inputWrapper: {
    display: "flex",
    marginTop: 15,
    marginHorizontal: isWeb ? 25 : 5,
  },
  requiredStar: { color: "#f00" },
  inputField: {
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 3,
    padding: 7,
    fontSize: 16,
  },

  buttonPosition: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#7d00b9",
    borderRadius: 3,
    ...(isWeb && {
      cursor: "pointer",
    }),
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
  buttonHovered: {
    backgroundColor: "#777777",
  },
});

export default formStyles;
