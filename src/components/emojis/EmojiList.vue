<script setup lang="ts">
import emojis from "@/utils/emojis";
import EmojiItem from "@/components/emojis/EmojiItem.vue"

</script>

<template>
    <ul class="emojis__list">
        <EmojiItem v-for="(emoji, index) in emojis" :key="index" :emoji="emoji" :index="index" />
    </ul>
</template>

<style lang="scss">
.emojis__list {
    position: absolute;
    width: 200px;
    height: 40vh;
    overflow-y: scroll;
    bottom: 14vh;
    right: 0;
    padding: 15px;
    border-radius: 12px;
    background-color: #f3f6ec;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    transition: all .4s;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

}
</style>