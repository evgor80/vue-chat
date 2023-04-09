<script setup lang="ts">
import { useAxios } from '@/composables/useAxios';
import type IRoom from '@/interfaces/IRoom';
import type { Socket } from 'socket.io-client';
import { computed, onBeforeMount, onBeforeUnmount, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import ChatHead from "@/components/RoomHead.vue"
import Loader from "@/components/shared/LoaderComponent.vue"
import TypingContainer from './TypingContainer.vue';
import MessageList from "@/components/message/MessageList.vue"
import NewMessageContainer from "@/containers/NewMessageContainer.vue"
import { useMessageListScroll } from '@/composables/useMesageListScroll';
import RoomPasswordFormContainer from './RoomPasswordFormContainer.vue';
import { useSocket } from '@/composables/useSocket';

const socket = ref<Socket>()
const route = useRoute()
const room = ref<IRoom>()
const messages = ref<Array<any>>()
const members = ref<Array<string>>()
const { makeApiCall, response } = useAxios();
const isLoading = ref(false)

const windowRef = ref()

const setIsLoading = (b: boolean) => isLoading.value = b

onBeforeMount(() => {
    makeApiCall({
        type: "GET",
        url: `/rooms/${route.params.slug}`,
    });
})

//scrolls list of messages to last message
useMessageListScroll(messages, windowRef)

watch(response, (r) => {
    if (r?.room) room.value = r.room
})

//subcribes to ws events from server
watch(room, (r) => {
    if (r) {
        useSocket(r, socket, isLoading, messages, members)

    }
})

onBeforeUnmount(() => socket.value?.disconnect())

//number of messages in current chat room
const msgNum = computed(() => messages.value
    ? messages.value.filter((m) => m.type === "message").length
    : room.value?.messages)
</script>

<template>
    <ChatHead :room="room" :members="members" :msgNum="msgNum" />
    <div v-if="!room || (!room.private && isLoading)" class="chat__messages chat__messages--empty">
        <Loader isColored isLarge />
    </div>
    <div v-if="room?.private && !messages" class="chat__messages">
        <RoomPasswordFormContainer :room="room" :socket="socket" :isLoading="isLoading"
            @loading="(b: boolean) => setIsLoading(b)" />
    </div>
    <div v-if="messages && !messages.length" class="chat__messages chat__messages--empty">
        <span>Пока нет сообщений</span>
    </div>
    <div v-if="messages && messages.length > 0" class="chat__messages" ref="windowRef">
        <MessageList :messages="messages" :members="members" />
    </div>
    <Transition name="msg">
        <TypingContainer :socket="socket" />
    </Transition>
    <NewMessageContainer :room="room" :socket="socket" />
</template>

<style lang="scss">
.chat__messages {
    height: 65vh;
    overflow-y: auto;

    &--empty {
        display: flex;
        justify-content: center;
        align-items: center;

        & span {
            font-size: 1.4rem;
        }
    }
}

.msg-enter-active,
.msg-leave-active {
    transition: all 0.4s ease;
    top: 0;
}

.msg-enter-from,
.msg-leave-to {
    opacity: 0;
    top: 10px;
}
</style>