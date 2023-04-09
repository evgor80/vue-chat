<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ value: string }>()
const textRef = ref()
defineExpose({ textRef })
</script>

<template>
    <textarea ref="textRef" name="newMessage" id="newMessage" placeholder="Введите свое сообщение" :value="value"
        @input="$event => $emit('changed', ($event.target as HTMLTextAreaElement).value)"></textarea>
</template>