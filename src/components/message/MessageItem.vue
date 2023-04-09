<script setup lang="ts">
import Message from "@/components/message/MessageComponent.vue"
import InfoMessage from "@/components/message/InfoMessage.vue"
import type { IInfoMessage } from "@/interfaces/IInfoMessage";
import type { IMessage } from "@/interfaces/IMessage";

export interface Props {
    message: IInfoMessage | IMessage;
    members?: Array<any>;
}
defineProps<Props>()
</script>

<template>
    <li class="msg">
        <Message v-if="message.type === 'message'" :message="message" :members="members" />
        <InfoMessage v-else :message="message" />
    </li>
</template>