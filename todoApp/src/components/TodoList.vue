<template>
  <div v-for="todo in todoList">
    <div
      class="flex justify-between px-4 border-2 border-fuchsia-600 rounded-lg mb-5"
    >
      <p
        class="self-center text-lg font-medium italic text-slate-50"
        :class="{ completed: todo.completed }"
      >
        {{ todo.item }}
      </p>
      <span>
        <button
          @click.stop="toggleCompleted(todo.id)"
          type="button"
          class="text-gray-900 w-12 bg-gradient-to-r my-1.5 from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-4 py-2 text-center mr-2"
        >
          <i class="fa-solid fa-eye fa-beat-fade"></i>
        </button>
        <button
          @click="deleteTodo(todo.id)"
          type="button"
          class="text-white w-12 bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-4 py-2 text-center mr-2"
        >
          <i class="fa-solid fa-trash fa-beat-fade"></i>
        </button>
      </span>
    </div>
  </div>
</template>

<script setup>
import { useTodoListStore } from "../stores/TodoList";
import { storeToRefs } from "pinia";
const store = useTodoListStore();
const { todoList } = storeToRefs(store);
const { toggleCompleted, deleteTodo } = store;
</script>

<style scoped>
.completed {
  text-decoration: line-through;
  opacity: 0.6;
}
</style>
