import { defineStore } from "pinia";
import { ref } from "vue";
export const useTodoListStore = defineStore("todoList", {
  state: () => ({
    todoList: [],
    id: ref(1),
  }),
  actions: {
    addTodo(item) {
      this.todoList.push({ item, id: this.id++, completed: false });
    },
    deleteTodo(itemId) {
      this.todoList = this.todoList.filter((item) => {
        return item.id !== itemId;
      });
    },
    toggleCompleted(itemId) {
      const todo = this.todoList.find((item) => item.id === itemId);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});
