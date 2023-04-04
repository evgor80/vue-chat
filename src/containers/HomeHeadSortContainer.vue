<script setup lang="ts">
import { ref } from 'vue';
import HomeHeadSortButton from "@/components/home-head-sort/HomeHeadSortButton.vue"
import HomeHeadSortList from "@/components/home-head-sort/HomeHeadSortList.vue"
import { useClickOutside } from '@/composables/useClickOutside';
import  useBlurHandle  from '@/composables/useBlurHandle';

const isDisplayed = ref(false)
const divRef = ref()
const setIsDisplayed = () => isDisplayed.value = !isDisplayed.value
const closeSortWindow = () => isDisplayed.value = false

useClickOutside(divRef, closeSortWindow)
useBlurHandle(divRef, closeSortWindow)
</script>

<template>
    <div ref="divRef">
        <HomeHeadSortButton @clicked="setIsDisplayed" />
        <Transition>
            <HomeHeadSortList v-if="isDisplayed" @clicked="setIsDisplayed" />
        </Transition>
    </div>
</template>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
    transition: all 0.6s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
    height: 0;

}
</style>