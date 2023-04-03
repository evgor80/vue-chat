<script setup lang="ts">
defineProps<{ isChecked: boolean }>()
</script>

<template>
    <div className="form__switch__wrapper">
        <span aria-hidden="true">Общедоступный</span>
        <label className="form__switch" htmlFor="checkbox">
            <input name="checkbox" id="checkbox" type="checkbox" aria-label="Приватный чат" :value="isChecked"
                @change="$emit('changed')" />
            <span className="form__switch__slider form__switch__slider--round"></span>
        </label>
        <span aria-hidden="true">Приватный</span>
    </div>
</template>

<style lang="scss" scoped>
.form__switch {
    position: relative;
    display: inline-block;
    width: 56px;
    height: 30px;
    margin: 0 20px;

    & input {
        opacity: 0;
        width: 0;
        height: 0;

        &:focus+.form__switch__slider {
            border: 1px solid grey;
            background-color: rgb(148, 186, 101);
            transition: .4s;
        }

        &:checked+.form__switch__slider:before {
            -webkit-transform: translateX(26px);
            -ms-transform: translateX(26px);
            transform: translateX(26px);
        }
    }

    &__slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(132, 177, 78, 0.7);
        border: 1px solid rgba(132, 177, 78, 0.7);
        -webkit-transition: .4s;
        transition: .4s;

        &:hover {
            background-color: rgb(148, 186, 101);
        }

        &:before {
            position: absolute;
            content: "";
            height: 20px;
            width: 20px;
            left: 4px;
            bottom: 4px;
            background-color: white;
            -webkit-transition: .4s;
            transition: .4s;
        }

        &--round {
            border-radius: 34px;

            &:before {
                border-radius: 50%;
            }
        }
    }

    &__wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>