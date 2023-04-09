<script setup lang="ts">
import MessageItem from "@/components/message/MessageItem.vue"
import type { IInfoMessage } from "@/interfaces/IInfoMessage";
import type { IMessage } from "@/interfaces/IMessage";
export interface Props {
    messages?: Array<IInfoMessage | IMessage>;
    members?: Array<any>;
}
defineProps<Props>()

</script>

<template>
        <TransitionGroup name="list" class="message-list" tag="ul">
            <MessageItem v-for="message in messages" :key="message._id" :message="message" :members="members" />
        </TransitionGroup>
</template>

<style lang="scss">
.message-list {
    overflow-x: hidden;
}

.list-enter-active,
.list-leave-active {
    transition: all 0.7s ease-out;
    transform: translateX(0)

}

.list-enter-from,
.list-leave-to {
    transform: translateX(100%)
}
</style>