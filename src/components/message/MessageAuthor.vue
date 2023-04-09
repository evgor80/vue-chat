<script setup lang="ts">
import { computed } from 'vue';
import userAvatar from "@/utils/userAvatar"

export interface Props {
    author: { username: string };
    isOnline: boolean;
}
const props = defineProps<Props>()
const className = computed(() => props.isOnline
    ? "msg__author__status--online"
    : "msg__author__status--offline")
</script>

<template>
    <div class="msg__author" :style="userAvatar(author.username)">
        <span>{{ author.username.charAt(0).toUpperCase() }}</span>
        <div class="msg__author__name">{{ author.username }}</div>
        <div :class='["msg__author__status", className]' />
    </div>
</template>

<style lang="scss">
.msg__author {
    min-width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 2px solid white;
    background-color: #66cc00;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    &:hover .msg__author__name {
        opacity: 1;
        -webkit-transition: .6s;
        transition: .6s;
    }

    & span {
        display: block;
        font-size: 3rem;
        color: white;
        font-weight: bolder;
        text-align: center;
    }

    &__name {
        opacity: 0;
        position: absolute;
        z-index: 3;
        padding: 8px;
        border: 1px solid grey;
        border-radius: 12px;
        top: 0;
        background-color: white;
        -webkit-transition: .6s;
        transition: .6s;
    }

    &__status {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        border: 2px solid white;
        position: absolute;
        right: 0;
        bottom: 2px;

        &--online {
            background-color: green;
        }

        &--offline {
            background-color: red;
        }
    }
}
</style>