<template>
  <div>
    <p class="self-center text-xl font-medium italic text-slate-50 text-center">
      Todo List
    </p>
    <TodoForm />
    <TodoList />
  </div>
</template>

<script setup>
import TodoForm from "./TodoForm.vue";
import TodoList from "./TodoList.vue";
</script>
<style scoped></style>
