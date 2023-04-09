<script setup lang="ts">
import { computed } from 'vue';

export interface Props {
    text: string;
    isAuthor: boolean;
}

const props = defineProps<Props>()
const className = computed(() => props.isAuthor ? " msg__text--mine" : "msg__text--their")
</script>

<template>
    <div :class="['msg__text', className]" v-html="text"></div>
</template>

<style lang="scss">
.msg__text {
    min-height: 56px;
    border-radius: 1.15rem;
    background-color: #6a8e3e;
    margin: 0;
    line-height: 1.25;
    padding: 0.5rem .875rem;
    position: relative;
    word-wrap: break-word;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    color: #fff;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    & img {
        margin: 5px;
    }

    &::before,
    &::after {
        bottom: -0.1rem;
        content: "";
        height: 1rem;
        position: absolute;
    }

    &:after {
        background-color: #e6e6e6;
    }

    &--mine {
        align-self: flex-end;

        &::before {
            border-bottom-left-radius: 0.8rem 0.7rem;
            border-right: 1rem solid #6a8e3e;
            right: -0.35rem;
            transform: translate(0, -0.1rem);
        }

        &::after {
            border-bottom-left-radius: 0.5rem;
            right: -40px;
            transform: translate(-30px, -2px);
            width: 10px;

        }
    }

    &--their {
        &:before {
            border-bottom-right-radius: 0.8rem 0.7rem;
            border-left: 1rem solid #6a8e3e;
            left: -0.35rem;
            transform: translate(0, -0.1rem);
        }

        &:after {
            border-bottom-right-radius: 0.5rem;
            left: 20px;
            transform: translate(-30px, -2px);
            width: 10px;
        }
    }
}
</style>