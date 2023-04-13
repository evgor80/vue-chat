<script setup lang="ts">
import beautifyDate from "@/utils/beautifyDate"

export interface Props {
    createdAt: string;
}
defineProps<Props>()
</script>

<template>
    <div class="msg__time">
        <span>{{ beautifyDate(createdAt) }}</span>
    </div>
</template>

<style lang="scss">
.msg__time {
    color: grey;
}
</style>