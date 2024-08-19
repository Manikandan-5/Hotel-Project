<template>
    <h1>TodoList</h1>
    <input v-model="newtask" @keyup.enter="addtask" placeholder="Add a New Todo"> 
    <button @click="addtask">Add Todo</button>   

    <ul>
        <li v-for="(task, index) in tasks" :key="index">
            {{ task }} <span style="color:blue;">{{ index }}</span> 
    <button @click="removetask(index)">Remove</button>

        </li>
    </ul>
 
</template>

<script setup>
import { ref } from 'vue';

const newtask = ref('');
const tasks = ref([]);

const addtask = () => {
    if (newtask.value.trim() != '') {
        tasks.value.push(newtask.value.trim());
        newtask.value = '';
    }
};

const removetask = (index) => {
    tasks.value.splice(index, 1);
};
</script>
