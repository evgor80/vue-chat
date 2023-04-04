<template>
    <button @click="$emit('clicked')" type="button" class="form__password-generator-button">
        Сгенерировать пароль автоматически
    </button>
</template>

<style lang="scss">
.form__password-generator-button {
    padding: 10px;
    border: 1px solid transparent;
    border-radius: 12px;
    cursor: pointer;
    transition: all .4s;

    &:focus,
    &:hover {
        border-color: grey;
    }
}
</style>