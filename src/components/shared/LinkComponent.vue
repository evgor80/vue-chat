<script setup lang="ts">
import { computed } from 'vue';

export interface Props {
  title: string;
  path: string;
  isActive?: boolean;
  className?: string;
}

const props = withDefaults(defineProps<Props>(), { isActive: false, className: "" })
const activeClass = computed(() => props.isActive ? "button--disabled" : "")

</script>

<template>
  <span v-if="isActive" :class="['button button--half-width', className, activeClass]">{{ title }}</span>
  <RouterLink v-else :to="path" :class="['button button--half-width', className, activeClass]">{{ title }}</RouterLink>
</template>

<style lang="scss"></style>