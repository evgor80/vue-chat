<script setup lang="ts">
import { emojisCloseKey } from '@/keys';
import { inject } from 'vue';

const handleClick = inject(emojisCloseKey) as () => void
</script>

<template>
    <div>
        <button @click="handleClick" aria-label="Закрыть окно с эмодзи" class="emojis__close">
            x
        </button>
    </div>
</template>

<style lang="scss">
.emojis__close {
    display: block;
    font-family: 'Times New Roman';
    position: absolute;
    margin: 5px;
    bottom: 52vh;
    right: -15px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border: solid 2px white;
    background-color: grey;
    border-radius: 50%;
    transition: all .4s;
    font-size: 1.2rem;
    cursor: pointer;

    &:hover,
    &:focus {
        background-color: #ff5858;
    }
}
</style>