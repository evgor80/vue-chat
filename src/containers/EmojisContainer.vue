<script setup lang="ts">
import useBlurHandle from '@/composables/useBlurHandle';
import { useClickOutside } from '@/composables/useClickOutside';
import { provide, ref } from 'vue';
import EmojisButton from "@/components/emojis/EmojisButton.vue"
import EmojiList from "@/components/emojis/EmojiList.vue"
import EmojiListCloseButton from "@/components/emojis/EmojiListCloseButton.vue"
import { emojisCloseKey } from '@/keys';

const isEmojisWindowOpened = ref(false)
const setIsOpened = () => isEmojisWindowOpened.value = !isEmojisWindowOpened.value
const emojisWindowRef = ref()

const closeEmojisWindow = () => isEmojisWindowOpened.value = false

useClickOutside(emojisWindowRef, closeEmojisWindow)
useBlurHandle(emojisWindowRef, closeEmojisWindow)

provide(emojisCloseKey, closeEmojisWindow)
</script>

<template>
    <div ref="emojisWindowRef" class="new-msg-form__emoji-block">
        <EmojisButton :isWindowOpened="isEmojisWindowOpened" @clicked="setIsOpened" />
        <Transition>
            <div v-if="isEmojisWindowOpened" class="emojis">
                <EmojiList />
                <EmojiListCloseButton />
            </div>
        </Transition>
    </div>
</template>

<style lang="scss">
.new-msg-form__emoji-block {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
}

.v-enter-active,
.v-leave-active {
    transition: all 0.4s ease;

}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>