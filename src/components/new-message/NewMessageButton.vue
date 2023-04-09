<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{ isActive: boolean }>()
const className = computed(() => props.isActive ? "" : "new-msg-form__submit-btn--disabled")
</script>

<template>
    <button @click="$emit('clicked')" :class="['new-msg-form__submit-btn', className]" aria-label="Отправить сообщение"
        :disabled="!isActive">
        <i class="fa fa-paper-plane"></i>
    </button>
</template>

<style lang="scss">
.new-msg-form__submit-btn {
    height: 40px;
    width: 40px;
    margin: 20px;
    cursor: pointer;

    &:hover,
    &:focus {
        & .fa {
            font-size: 1.8rem;
        }
    }

    .fa {
        color: grey;
        font-size: 1.4rem;
        transition: all .4s;


    }

    &--disabled {
        cursor: default;

        &:hover,
        &:focus {
            & .fa {
                font-size: 1.4rem;
            }
        }

        & .fa {
            color: white;


        }
    }
}
</style>