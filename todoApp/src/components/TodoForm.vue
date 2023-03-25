<template>
  <div class="py-6">
    <form
      @submit.prevent="addTodoAndClear(todo)"
      class="flex flex-col items-center"
    >
      <input
        v-model="todo"
        type="text"
        id="todo"
        class="block px-2.5 my-5 pb-1.5 pt-3 w-96 text-sm bg-transparent text-slate-300 rounded-lg border-2 italic border-fuchsia-600 appearance-none focus:outline-none focus:ring-0 focus:border-fuchsia-800 peer"
        placeholder=" "
      />
      <button
        type="submit"
        class="w-48 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
      >
        <span
          class="w-48 relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
        >
          Add
        </span>
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTodoListStore } from "../stores/TodoList";
const todo = ref("");
const store = useTodoListStore();
function addTodoAndClear(item) {
  if (item.length === 0) {
    return;
  }
  store.addTodo(item);
  todo.value = "";
}
</script>

<style scoped></style>
