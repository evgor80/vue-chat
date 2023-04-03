<script setup lang="ts">
import { computed, ref } from 'vue';
import FormInputWrapper from "@/components/form/FormInputWrapper.vue"
import FormInputLabel from "@/components/form/FormInputLabel.vue"
import FormInputError from "@/components/form/FormInputError.vue"
import FormInput from "@/components/form/FormInput.vue"
import FormPasswordVisibilityButton from "@/components/form/FormPasswordVisibilityButton.vue"

type Props = {
    title: string;
    name: string;
    error?: string;
    injectionKey: Symbol
};
const props = defineProps<Props>()

const isPasswordVisible = ref(false)

const onClick = () => isPasswordVisible.value = !isPasswordVisible.value

const isPasswordField = computed(() => props.name === "password" || props.name === "confirmPassword");
const isPasswordType = computed(() => isPasswordField.value && !isPasswordVisible.value);
</script>

<template>
    <FormInputWrapper>
        <FormInputLabel :name="name" :title="title" />
        <FormInput :name="name" :isPasswordField="isPasswordType" :injectionKey="injectionKey" />
        <FormPasswordVisibilityButton v-if="isPasswordField" @clicked="onClick" :isVisible="isPasswordVisible" />
        <FormInputError :error="error" />
    </FormInputWrapper>
</template>