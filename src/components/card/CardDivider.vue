<script setup lang="ts">
withDefaults(defineProps<{ isTextDisplayed?: boolean }>(), { isTextDisplayed: false })
</script>

<template>
    <div class="card__divider">
        <span v-if="isTextDisplayed">или</span>
    </div>
</template>

<style lang="scss">
.card__divider {
    border-bottom: 1px solid #e5e5e5;
    margin: 15px 0;
    position: relative;

    & span {
        position: absolute;
        top: -18px;
        color: #999;
        font-size: 18px;
        display: inline-block;
        text-align: center;
        width: 100%;
        padding: 4px 4px;
    }
}
</style>