<template>
    <form @submit.prevent="handleSubmit">
        <input type="text" v-model="todoValue">
        <button type="submit">Add Todo</button>
    </form>
</template>

<script setup>
import {ref} from "vue"
const emit = defineEmits(['onSubmit'])

const todoValue = ref("")

function handleSubmit(e)
{
    emit("onSubmit", todoValue.value)
}
</script>

