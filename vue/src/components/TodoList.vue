<template>
    <div>
        <TodoForm @onSubmit="addTodo" />
        <ul>
            <TodoItem v-for="(item, index) in todos" :key="index" :todoItem="item" />
        </ul>
    </div>
</template>

<script setup>
import {ref} from "vue"
import TodoForm from "./TodoForm.vue"
import TodoItem from "./TodoItem.vue"
const todos = ref([{id: 1, text: "Learn Svelte"}])

function addTodo(value)
{
    todos.value = [...todos.value, {id: todos.value.length + 1, text: value}]
}
</script>
