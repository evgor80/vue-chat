<script setup lang="ts">
import { computed, inject } from 'vue';

export interface Props {
    name: string;
    isPasswordField?: boolean;
    injectionKey: Symbol;
}
const props = withDefaults(defineProps<Props>(), { isPasswordField: false })

const [value, setInput] = inject(props.injectionKey) as Array<any>

const inputType = computed(() => props.isPasswordField ? "password" : "text")
</script>

<template>
    <input :name="name" :id="name" class="form__input__field" :type="inputType" required :value="value"
        @input="setInput(($event.target as HTMLInputElement).value)" />
</template>

<style lang="scss">
.form__input__field {
    width: 100%;
    border: 1px solid #dbdbdb;
    font-size: 1.2rem;
    color: #666;
    padding: 12px 30px;
    border-radius: 2px;
    margin: 20px 0;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;

    &:focus {
        border: 2px solid #dbdbdb;
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    }
}
</style>