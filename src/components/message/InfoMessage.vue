<script setup lang="ts">
import type {IInfoMessage} from "@/interfaces/IInfoMessage"

export interface Props {
    message: IInfoMessage
}
defineProps<Props>()
</script>

<template>
    <div class="msg__notification">
        <span>
            {{ message.user }}
            {{ message.type === "join" ? "входит в" : "покидает" }} чат
        </span>
    </div>
</template>

<style lang="scss">
.msg__notification {
    display: flex;
    justify-content: center;
    margin: 30px 10px;

    & span {
        display: inline-block;
        background-color: #6a8e3e;
        color: white;
        padding: 15px;
        border-radius: 5px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    }
}
</style>