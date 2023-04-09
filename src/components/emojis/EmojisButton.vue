<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{ isWindowOpened: boolean }>()
const className = computed(() => props.isWindowOpened ? "new-msg-form__emoji--active" : "")
</script>

<template>
    <button class="new-msg-form__emoji-btn" @click="$emit('clicked')" aria-label="Выбрать эмодзи">
        <img :class="['new-msg-form__emoji', className]" src="/emojis/7.png" alt="🙂" />
    </button>
</template>

<style lang="scss">
.new-msg-form__emoji-btn {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;

    &:focus,
    &:hover {
        & .new-msg-form__emoji {
            height: 40px;
            width: 40px;
            margin: 0;
        }
    }
}

.new-msg-form__emoji {
    height: 30px;
    width: 30px;
    margin: 10px;
    cursor: pointer;
    transition: all .4s;

    &--active {
        height: 40px;
        width: 40px;
        margin: 0;
    }
}
</style>