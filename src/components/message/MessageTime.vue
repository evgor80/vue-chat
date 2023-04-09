<script setup lang="ts">
import { computed } from 'vue';
import beautifyDate from "@/utils/beautifyDate"

export interface Props {
    createdAt: number;
    isAuthor: boolean;
}
const props = defineProps<Props>()
const className = computed(() => props.isAuthor ? "msg__time--mine" : "")
</script>

<template>
    <div :class="['msg__time', className]">
        <span>{{ beautifyDate(createdAt) }}</span>
    </div>
</template>

<style lang="scss">
.msg__time {
    display: flex;
    color: grey;
    padding-left: 20px;

    &--mine {
        flex-direction: row-reverse;

        & span {
            padding-right: 20px;
        }
    }
}
</style>