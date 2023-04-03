<script setup lang="ts">
import { computed } from 'vue';
import Loader from "@/components/shared/LoaderComponent.vue"

export interface Props {
    title: string;
    isActive?: boolean;
    isLoading?: boolean;
    isFullWidth?: boolean;
    type?: "button" | "submit" | "reset" | undefined;
}

const props = withDefaults(defineProps<Props>(), {
    isActive: true,
    isLoading: false,
    isFullWidth: false,
    type: "button",
})

const classNames = computed(() => `button ${props.isFullWidth ? "" : "button--half-width"} ${props.isActive ? "" : "button--disabled"
    }`)
</script>


<template>
    <button :disabled="!isActive" :class="classNames" :type="type">
        <Loader v-if="isLoading" />
        <span v-else>{{ title }}</span>
    </button>
</template>