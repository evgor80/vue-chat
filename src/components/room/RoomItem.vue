<script setup lang="ts">
import type IRoom from '@/interfaces/IRoom';

const props = defineProps<{ room: IRoom }>()
const className = props.room.private ? 'fa-user-lock' : 'fa-lock-open'
const roomType = props.room.private ? " Закрытый" : " Общий"
const link = `/room/${props.room.slug}`
</script>

<template>
    <li class="room">
        <RouterLink :to="link" class="room__link">
        <div class="room__name">
            <span>{{ room.name }}</span>
        </div>
        <div class="room__details">
            <span>
                <i class="fas fa-users"></i> {{ room.members }}
            </span>

            <span>
                <i class="fas fa-comment"></i> {{ room.messages }}
            </span>

            <span>
                <i :class="[className, 'fa']"></i>
                {{ roomType }}
            </span>
        </div>
        </RouterLink>
    </li>
</template>

<style lang="scss">
.room {
    border: 1px solid rgba(148, 186, 101, 0.9);
    border-radius: 20px;
    margin: 0 5px 20px 0;
    transition: 0.7s;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;



    &__link {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 20px 10px;
        border-radius: 20px;
        width: 100%;
        height: 100%;

        &:hover,
        &:focus {
            background-color: rgba(148, 186, 101, 0.9);
            transition: 0.7s;

            & {
                .room__name {
                    color: white;
                    transition: 0.7s;
                }
            }

            & .room__details {
                & span {
                    color: white;
                    transition: 0.7s;
                }
            }
        }
    }

    &__details {
        & span {
            display: flexbox;
            margin: 10px;
            color: darkolivegreen;
            font-size: 1.2rem;
            transition: 0.7s;
        }
    }

    &__name {
        color: grey;
        font-size: 1.4rem;
        margin-bottom: 20px;
        transition: 0.7s;
        text-align: center;
    }
}
</style>