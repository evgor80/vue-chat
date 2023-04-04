<script setup lang="ts">
import HomeHeadSortItem from "@/components/home-head-sort/HomeHeadSortItem.vue"
import { sortKey } from '@/keys';
import { inject } from 'vue';

const options = [
    { title: "По умолчанию", type: "default" },
    { title: "По количеству участников", type: "members" },
    { title: "По количеству сообщений", type: "messages" },
    { title: "По типу чата", type: "type" },
];
const handleClick = inject(sortKey) as (type: string) => void

</script>

<template>
    <ul class="search__sort__container">
        <HomeHeadSortItem v-for="option in options" :key="option.type" :title="option.title" :type="option.type" @clicked="(type: string) => {
            handleClick(type); 
            $emit('clicked')
        }" />
    </ul>
</template>

<style lang="scss">
.search__sort__container {
    position: absolute;
    top: 50px;
    right: 0;
    width: 150px;
    background-color: #fff;
    border: solid 1px rgba(148, 186, 101, 0.9);
    border-radius: 12px;
    overflow: hidden;
}
</style>