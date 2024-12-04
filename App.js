import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";
import ToDoList from "./src/components/ToDoList";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <StatusBar backgroundColor="dark" />
        <ToDoList />
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
