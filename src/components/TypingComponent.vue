<script setup lang="ts">
export interface Props {
    userTyping: string;
}
defineProps<Props>()
</script>

<template>
    <div class="typing__wrapper">
        <div class="typing__event">
            <span>{{ userTyping }} печатает</span>
        </div>
    </div>
</template>

<style lang="scss">
.typing {
    &__wrapper {
        position: relative;
    }

    &__event {
        position: absolute;
        top: -30px;
        width: 100%;
        display: flex;
        justify-content: center;

        span {
            display: inline-block;
            background-color: #6a8e3e;
            color: white;
            padding: 5px;
            border-radius: 5px;
            font-size: 0.8rem;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        }
    }
}
</style>