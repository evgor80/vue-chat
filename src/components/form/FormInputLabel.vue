<script setup lang="ts">
defineProps<{ name: string, title: string }>()
</script>

<template>
    <label :for="name" class="form__input__label">
        {{ title }}
    </label>
</template>

<style lang="scss">
.form__input__label {
    position: absolute;
    left: 8px;
    top: 2px;
    color: #999;
    font-size: 18px;
    display: inline-block;
    background-color: #fff;
    padding: 4px 4px;
}
</style>