<script setup lang="ts">
import HomeHeadSearchContainer from "@/containers/HomeHeadSearchContainer.vue"
import HomeHeadSortContainer from "@/containers/HomeHeadSortContainer.vue"

</script>

<template>
    <div class="search">
        <div class="search__body">
            <HomeHeadSearchContainer />
            <HomeHeadSortContainer />
        </div>
    </div>
</template>

<style lang="scss">
.search {
    height: 10vh;
    position: relative;

    &__body {
        background-color: #b5d095;
        border-radius: 10px;
        display: flex;
        justify-content: space-between;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
}
</style>