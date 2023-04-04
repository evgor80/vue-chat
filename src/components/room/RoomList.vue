<script setup lang="ts">
import type IRoom from '@/interfaces/IRoom';
import RoomItem from "@/components/room/RoomItem.vue"
import Loader from "@/components/shared/LoaderComponent.vue"

defineProps<{ list?: Array<IRoom>, isLoading: boolean }>()
</script>

<template>
    <div v-if="list && list.length === 0" class="rooms-list rooms-list--empty">
        <span>Нет чатов</span>
    </div>
    <ul v-else-if="list && list.length" class="rooms-list">
        <RoomItem v-for="room in list" :key="room.id" :room="room" />
    </ul>
    <div v-else-if="isLoading" class="rooms-list rooms-list--empty">
        <Loader isColored isLarge />
    </div>
    <div v-else class="rooms-list rooms-list--empty">
        Не удалось получить данные с сервера
    </div>
</template>

<style lang="scss">
.rooms-list {
    height: 70vh;
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
</style>