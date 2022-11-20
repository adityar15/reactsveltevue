<template>
    <li>
        {{todoItem.text}}
    </li>
</template>

<script setup>
defineProps({
    todoItem: Object
})
</script>
