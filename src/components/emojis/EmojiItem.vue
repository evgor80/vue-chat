<script setup lang="ts">
import { emojiKey, emojisCloseKey } from '@/keys';
import { computed, inject, ref } from 'vue';

export interface Props {
    emoji: { name: string, alt: string };
    index: number;
}

const props = defineProps<Props>()

const isHovered = ref(false)
const setIsHoveredTrue = () => isHovered.value = true
const setIsHoveredFalse = () => isHovered.value = false

const style = computed(() => `background-position: left -${props.index * (isHovered.value ? 40 : 32)}px center`)
const ariaLabel = computed(() => `Эмодзи: ${props.emoji.name}`)

const addEmoji = inject(emojiKey) as (emoji: string) => void
const closeWindow = inject(emojisCloseKey) as () => void
const handleClick = (emoji: string) => {
    addEmoji(emoji);
    closeWindow();
}
</script>

<template>
    <li class="emojis__item">
        <button class="emojis__btn" :aria-label="ariaLabel" :style="style" @mouseenter="setIsHoveredTrue"
            @mouseleave="setIsHoveredFalse" @focus="setIsHoveredTrue" @blur="setIsHoveredFalse" @click="handleClick(emoji.alt)"></button>
    </li>
</template>

<style lang="scss">
.emojis__item {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.emojis__btn {
    background-color: white;
    width: 32px;
    height: 32px;
    margin: 4px;
    cursor: pointer;
    background-image: url("/spritesheet.png");
    background-position: left -192px center;
    background-repeat: no-repeat;
    transition: width height .4s;

    &:hover,
    &:focus {
        width: 40px;
        height: 40px;
        margin: 0;
        background-position: left -240px center;
        background-size: 4240px;
    }
}
</style>