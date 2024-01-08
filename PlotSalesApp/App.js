import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import store from "./src/redux/store/store";
import Navigation from "./Navigation";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <StatusBar translucent backgroundColor="green" />
        <Navigation />
      </Provider>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
