<script setup lang="ts">
import { computed, provide, ref, watch } from 'vue';
import NewMessageTextarea from "@/components/new-message/NewMessageTextarea.vue"
import NewMessageButton from "@/components/new-message/NewMessageButton.vue"
import EmojisContainer from "@/containers/EmojisContainer.vue"
import { useEmitTyping } from "@/composables/useEmitTyping"
import { emojiKey } from '@/keys';
import type IRoom from '@/interfaces/IRoom';
import type { Socket } from 'socket.io-client';
import { useNewMessageSelection } from '@/composables/useNewMessageSelection';

export interface Props {
    room?: IRoom,
    socket?: Socket
}
const props = defineProps<Props>()

const newMessage = ref("")
const textareaRef = ref()
const selection = useNewMessageSelection(newMessage, textareaRef)

//send typing event to ws server
watch(() => props.socket, (s) => {
    if (s) {
        useEmitTyping(newMessage, props.socket, props.room)

    }
})

const isButtonActive = computed(() => newMessage.value.length > 0)

const handleChange = (value: string) => {
    newMessage.value = value.trim()
}

const sendMessage = () => {
    props.socket?.emit("message", {
        token: localStorage.token,
        message: {
            type: "message",
            author: { username: localStorage.user },
            text: newMessage.value,
            createdAt: Date.now(),
        },
        room: props.room?.name,
    });
    newMessage.value = "";
}

const handleEmoji = (emoji: string) => {
    const sel = textareaRef.value!.textRef.selectionStart!;
    selection.value = sel + 2;
    const str = newMessage.value.slice(0, sel) + emoji + newMessage.value.slice(sel);
    newMessage.value = str;
}

provide(emojiKey, handleEmoji)

</script>

<template>
    <div class="new-msg-form">
        <NewMessageTextarea :value="newMessage" ref="textareaRef" @changed="(value: string) => handleChange(value)" />
        <EmojisContainer />
        <NewMessageButton :isActive="isButtonActive" @clicked="sendMessage" />
    </div>
</template>

<style lang="scss">
.new-msg-form {
    border-top: 2px solid white;
    height: 14vh;
    width: 100%;
    background-color: #b5d095;
    border-radius: 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: relative;
    align-items: center;

    & textarea {
        background-color: #b5d095;
        resize: none;
        height: 100%;
        padding: 10px;
        border: none;
        border-radius: 10px;
        color: grey;
        font-size: 1.2rem;
        width: 85%;

        &:focus {
            color: black;

        }
    }
}
</style>