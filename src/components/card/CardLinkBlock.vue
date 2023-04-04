<script setup lang="ts">
import { useRoute } from 'vue-router';
import Link from "@/components/shared/LinkComponent.vue"

const path = useRoute().path
</script>

<template>
    <Link title="Вход" path="/login" :isActive="path === '/login'" class="button--no-shadow" />
    <Link title="Регистрация" path="/signup" :isActive="path !== '/login'" class="button--no-shadow" />
</template>