<script setup lang="ts">
import { useNotificationStore } from '@/stores/notification';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';


const { notification, isDisplayed, type } = storeToRefs(useNotificationStore())
const className = computed(() => `notifications__body--${type.value}`) 
</script>

<template>
    <Transition name="ntf">
        <div v-if="isDisplayed" class="notifications">
            <div :class='["notifications__body", className]'>
                <span class="notifications__text">{{ notification }}</span>
            </div>
        </div>
    </Transition>
</template>

<style lang="scss">
.notifications {
    position: fixed;
    left: 0;
    bottom: 10px;
    width: 100%;
    display: flex;
    justify-content: center;

    &__body {
        border-radius: 12px;
        padding: 15px;
        display: flex;
        justify-content: center;
        color: white;
        box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;

        &--warning {
            background-color: #ff5858;
        }

        &--info {
            background-color: #28a745
        }
    }
}

.ntf-enter-active,
.ntf-leave-active {
    transition: all 0.4s ease;
}

.ntf-enter-from,
.ntf-leave-to {
    opacity: 0;
    bottom: 0;
}
</style>