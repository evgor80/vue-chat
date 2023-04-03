<script setup lang="ts">
import Card from '@/components/card/CardComponent.vue';
import CardTitle from '@/components/card/CardTitle.vue';
import CardLinkWrapper from '@/components/card/CardLinkWrapper.vue';
import CardDivider from '@/components/card/CardDivider.vue';
import Link from '@/components/shared/LinkComponent.vue';


</script>

<template>
    <Card>
        <CardTitle title="Доступ только для зарегистрированных пользователей" />
        <CardLinkWrapper>
            <Link title="Вход" path="/login" />
        </CardLinkWrapper>
        <CardDivider isTextDisplayed />
        <CardLinkWrapper>
            <Link title="Регистрация" path="/signup" />
        </CardLinkWrapper>
    </Card>
</template>