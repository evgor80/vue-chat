<script setup lang="ts">
import type IRoom from '@/interfaces/IRoom';

export interface Props {
    members?: Array<string>;
    room?: IRoom;
    msgNum?: number
}
defineProps<Props>()
</script>
<template>
    <div class="chat__head">
        <div class="chat__name">
            <span>{{room?.name}}</span>
        </div>
        <div class="chat__info">
            <span>
                <i class="fa fa-users"></i>
                {{ members ? members.length : room?.members }} /
                <i class="fa fa-comment"></i> {{ msgNum }}
            </span>
        </div>
    </div>
</template>

<style lang="scss">
.chat {
    &__head {
        height: 15vh;

        background-color: #b5d095;
        padding: 20px;
        border-radius: 5px;
        color: grey;
    }

    &__name {
        text-align: center;
        text-transform: uppercase;
        font-size: 1.2rem;
        padding-bottom: 10px;
    }

    &__info {
        text-align: center;

        & .fa {
            color: darkolivegreen;
            font-size: 1.2rem;
        }
    }
}
</style>