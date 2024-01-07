import { StyleSheet } from "react-native";

const formStyles = StyleSheet.create({
  title: {
    fontSize: 22,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  model: {
    position: "absolute",
    left: "5%",
    top: "5%",
    transform: [
      { translateX: -40 + 112 }, // Adjust this value based on half of the modal width
      { translateY: -30 + 35 }, // Adjust this value based on half of the modal height
    ],
    width: "80vw",
    height: "80vh",
    backgroundColor: "#fff",
  },
  padder: {
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  closeButton: {
    position: "absolute",
    right: 0,
    top: 0,
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: "#ddd",
    fontSize: "20px",
    cursor: "pointer",
    zIndex: 1000,
  },

  allInputs: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr", // Adjust the number of columns as needed
    gridColumnGap: 16, // Adjust the column gap value as needed
    gridRowGap: 16,
  },

  inputWrapper: {
    display: "flex",
    marginTop: 15,
    marginHorizontal: 25,
  },
  inputField: {
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: "3px",
    padding: 7,
    fontSize: "16px",
  },

  buttonPosition: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#7d00b9",
    borderRadius: "3px",
    cursor: "pointer",
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 20,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: "14px",
    color: "white",
  },
  buttonHovered: {
    backgroundColor: "#777777",
  },
});

export default formStyles;
