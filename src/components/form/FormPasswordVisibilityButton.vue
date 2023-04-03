<script setup lang="ts">
import { computed } from 'vue';


const props = defineProps<{ isVisible: boolean }>()
const label = computed(() => props.isVisible ? "Скрыть пароль" : "Показать пароль");
const buttonClass = computed(() => props.isVisible ? "fa fa-eye-slash" : "fa fa-eye")
</script>

<template>
    <button  type="button" @click="$emit('clicked')" class="form__password-button" :aria-label="label">
        <i aria-hidden="true" :class="buttonClass"></i>
    </button>
</template>

<style lang="scss">
.form__password-button {
        position: absolute;
        top: 35px;
        right: 8px;
        cursor: pointer;
        color: grey;

        & i {
            font-size: 1rem;
        }

        &:hover::after,
        &:focus::after {
            content: attr(aria-label);
            position: absolute;
            display: inline-block;
            background-color: #fff;
            bottom: -40px;
            right: 0px;
            padding: 5px;
            white-space: nowrap;
            border: 1px solid rgba(128, 128, 128, 0.3);
            border-radius: 4px;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
                rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        }
    }</style>