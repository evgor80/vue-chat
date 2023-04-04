<script setup lang="ts">
defineProps<{ value: string }>()

</script>

<template>
    <input class="search__input" type="text" name="search" id="search" placeholder="Искать чат" :value='value'
        @input="$event => $emit('changed', ($event.target as HTMLInputElement).value)" />
</template>

<style lang="scss">
.search__input {
    background-color: #b5d095;
    height: 40px;
    padding-left: 10px;
    padding-right: 35px;
    border: none;
    border-radius: 10px;
    color: grey;
    width: 100%;

    &:focus {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
}
</style>