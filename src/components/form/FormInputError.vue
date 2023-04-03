<script setup lang="ts">
withDefaults(defineProps<{ error?: string }>(), { error: "" })
</script>
<template>
    <p v-if="error" class="form__input__error">{{ error }}</p>
</template>

<style lang="scss">
.form__input__error {
    padding: 10px;
    margin-top: -10px;
    color: #fff;
    background-color: #ff5858;
    border-radius: 5px;
}
</style>