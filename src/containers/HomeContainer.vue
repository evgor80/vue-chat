<script setup lang="ts">
import { useAxios } from '@/composables/useAxios';
import { computed, onBeforeMount, provide, ref, watch } from 'vue';
import type IRoom from "@/interfaces/IRoom";
import { io } from "socket.io-client";
import { searchKey, sortKey } from "@/keys/index"
import HomeHead from "@/components/HomeHead.vue"
import RoomList from "@/components/room/RoomList.vue"
import HomeNewLink from "@/components/HomeNewLink.vue"

const { response, isLoading, makeApiCall } = useAxios()

const list = ref<Array<IRoom>>()
const searchInput = ref("")

const handleSearchInputChange = (str: string) => {
    searchInput.value = str
}

const filteredList = computed(() => {
    if (searchInput.value) {
        return list.value?.filter(r => r.name.toLowerCase().match(searchInput.value.trim().toLowerCase()))
    }
    return list.value
})

onBeforeMount(() => {
    makeApiCall({
        method: "GET",
        url: "/rooms",
    })
    const socket = io("ws://localhost:3000");
    socket.on("update", (room: IRoom) => {
        list.value = list.value?.map((r) => (r.id === room.id ? room : r));
    });
})

watch(response, (r) => {
    if (r?.rooms) {
        list.value = r.rooms
    }
})

function sortRooms(type: "default" | "type" | "members" | "messages") {
    switch (type) {
        case "default":
            list.value = list.value?.sort((a, b) => {
                if (a.createdAt > b.createdAt) {
                    return 1;
                }
                if (b.createdAt > a.createdAt) {
                    return -1;
                }
                return 0;
            })
            break;
        case "type":
            list.value = list.value?.sort((a, b) => (a.private as any) - (b.private as any));
            break;
        case "members":
            list.value = list.value?.sort((a, b) => b.members - a.members);

            break;
        case "messages":
            list.value = list.value?.sort((a, b) => b.messages - a.messages);
            break;
    }

}
provide(searchKey, [searchInput, handleSearchInputChange])
provide(sortKey, sortRooms)
</script>

<template>
    <HomeHead />
    <RoomList :list="filteredList" :isLoading="isLoading" />
    <HomeNewLink />
</template>