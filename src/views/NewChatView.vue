<script setup lang="ts">
import Card from '@/components/card/CardComponent.vue';
import CardTitle from '@/components/card/CardTitle.vue';
import CardDivider from '@/components/card/CardDivider.vue';
import NewChatFormContainer from '@/containers/NewChatFormContainer.vue';

</script>

<template>
    <Card>
            <CardTitle title="Создать новый чат"/>
            <CardDivider />
            <NewChatFormContainer />
        </Card>
</template>