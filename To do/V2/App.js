import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";

export default class App extends React.Component {
  state = {
    text: "",
    todos: []
  };

  addTodo = () => {
    let todos = [...this.state.todos, this.state.text];
    this.setState({
      todos,
      text: ""
    });
  };

  deleteTodo = (index) => {
    let todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({
      todos
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your task"
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
          />
          <TouchableOpacity style={styles.addButton} onPress={this.addTodo}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
        {this.state.todos.map((todo, index) => (
          <View key={index} style={styles.todoContainer}>
            <Text style={styles.todoText}>{todo}</Text>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => this.deleteTodo(index)}
            >
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 20
  },
  input: {
    width: "70%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 5
  },
  addButton: {
    backgroundColor: "#008080",
    padding: 10,
    borderRadius: 5
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16
  },
  todoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#bbb"
  },
  todoText: {
    fontSize: 16
  },
  deleteButton: {
    backgroundColor: "#ff0000",
    padding: 10,
    borderRadius: 5
  },
  deleteButtonText: {
    color: "#fff",
    fontSize: 16
  }
});
