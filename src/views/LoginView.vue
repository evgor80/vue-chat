<script setup lang="ts">
import Card from '@/components/card/CardComponent.vue';
import CardTitle from '@/components/card/CardTitle.vue';
import CardDivider from '@/components/card/CardDivider.vue';
import CardLinkBlock from '@/components/card/CardLinkBlock.vue';
import LoginFormContainer from '@/containers/LoginFormContainer.vue';



</script>

<template>
    <Card>
        <CardLinkBlock />
        <CardTitle title="Вход в систему" />
        <CardDivider />
        <LoginFormContainer />
    </Card>
</template>