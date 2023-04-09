<script setup lang="ts">
import { ref } from 'vue';
import HomeHeadSortButton from "@/components/home-head-sort/HomeHeadSortButton.vue"
import HomeHeadSortList from "@/components/home-head-sort/HomeHeadSortList.vue"
import { useClickOutside } from '@/composables/useClickOutside';
import useBlurHandle from '@/composables/useBlurHandle';

const isDisplayed = ref(false)
const divRef = ref()
const setIsDisplayed = () => isDisplayed.value = !isDisplayed.value
const closeSortWindow = () => isDisplayed.value = false

useClickOutside(divRef, closeSortWindow)
useBlurHandle(divRef, closeSortWindow)
</script>

<template>
    <div ref="divRef">
        <HomeHeadSortButton name="head" @clicked="setIsDisplayed" />
        <Transition>
            <HomeHeadSortList v-if="isDisplayed" @clicked="setIsDisplayed" />
        </Transition>
    </div>
</template>

<style lang="scss" scoped>
.head-enter-active,
.head-leave-active {
    transition: all 0.6s ease;
}

.head-enter-from,
.head-leave-to {
    opacity: 0;
}
</style>