import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "../redux/todoSlice";

const ToDoList = () => {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.todoContainer}>
      <Text
        style={[
          styles.todoText,
          { textDecorationLine: item.completed ? "line-through" : "none" },
        ]}
        onPress={() => dispatch(toggleTodo(item.id))}
      >
        {item.text}
      </Text>
      <TouchableOpacity onPress={() => dispatch(deleteTodo(item.id))}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-Do App</Text>
      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        value={text}
        onChangeText={setText}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
        <Text style={styles.addButtonText}>Add Todo</Text>
      </TouchableOpacity>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ToDoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  todoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  todoText: {
    fontSize: 16,
  },
  deleteText: {
    color: "red",
    fontWeight: "bold",
  },
});
