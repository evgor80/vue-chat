<script setup lang="ts">
import { searchKey } from '@/keys';
import { inject } from 'vue';
import HomeHeadSearchInput from "@/components/home-head-search/HomeHeadSearchInput.vue"
import HomeHeadSearchResetButton from "@/components/home-head-search/HomeHeadSearchResetButton.vue"

const [searchInput, handleSearchInputChange] = inject(searchKey) as Array<any>
</script>

<template>
    <HomeHeadSearchInput :value='searchInput' @changed="(inp: string) => handleSearchInputChange(inp)" />
    <HomeHeadSearchResetButton v-if="searchInput" @clicked="handleSearchInputChange('')" />
</template>