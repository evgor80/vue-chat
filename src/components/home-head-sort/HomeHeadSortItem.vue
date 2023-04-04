<script setup lang="ts">

defineProps<{ type: string, title: string }>()
</script>

<template>
    <li class="search__sort__item">
        <button class="search__sort__btn" @click="$emit('clicked', type)">
            {{ title }}
        </button>
    </li>
</template>

<style lang="scss">
.search__sort__item {
    border: solid 1px rgba(148, 186, 101, 0.9);
}

.search__sort__btn {
    cursor: pointer;
    padding: 5px;
    width: 100%;
    text-align: center;
    color: grey;
    transition: 0.4s;

    &:hover,
    &:focus {
        background-color: rgba(148, 186, 101, 0.9);
        color: white;
    }
}
</style>