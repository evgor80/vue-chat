<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
    <h1 class="card__title">{{ title }}</h1>
</template>

<style lang="scss">
.card__title {
    font-size: 1.5rem;
    text-align: center;
    color: #666;
    margin: 20px 0;
    font-weight: 700;
}
</style>