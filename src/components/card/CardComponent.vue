<script setup lang="ts" >
import { computed } from 'vue';


export interface Props {
    isFullHeight?: boolean;
    isFullWidth?: boolean;
}
const props = withDefaults(defineProps<Props>(), { isFullHeight: false, isFullWidth: false })

const widthClass = computed(() => props.isFullWidth ? "offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 offset-md-1 col-md-10 offset-sm-1 col-sm-10"
    : "offset-xl-4 col-xl-4 offset-lg-3 col-lg-6 offset-md-3 col-md-6 offset-sm-2 col-sm-8")

const heightClass = computed(() => props.isFullHeight ? "card__body--full-height" : "")

</script>

<template>
    <div :class="['card', widthClass]">
        <div :class="['card__body', heightClass]">
            <slot />
        </div>
    </div>
</template>

<style lang="scss">
.card {
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;

    &__body {
        width: 100%;
        padding: 15px;
        border-radius: 12px;
        background-color: #fff;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

        &--full-height {
            height: 98vh;
        }
    }
}
</style>