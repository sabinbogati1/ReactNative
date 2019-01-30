import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Provider} from "react-redux";
import Main from "./src/Main";
import configureStore from "./src/store/configureStore";

const store = configureStore();


export default class App extends Component {
 // <View style={styles.main}>
      //     <Main/>
      // </View>
  render() {
    return (
      <Provider store={store}>
          <Main/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  main: {
    flex:1
  }
});
