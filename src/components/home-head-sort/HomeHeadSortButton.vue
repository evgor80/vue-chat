<template>
    <button class="search__sort__icon" @click="$emit('clicked')" aria-label="Сортировать чаты">
        <i class="fa fa-sort-amount-up"></i>
    </button>
</template>

<style lang="scss">
.search__sort__icon {
    display: inline-block;
    color: grey;
    padding: 10px;
    cursor: pointer;
    border-radius: 10px;
    transition: all .4s;

    &:hover,
    &:focus {
        color: darkslategray;

        &:after {

            content: attr(aria-label);
            color: grey;
            position: absolute;
            display: inline-block;
            background-color: #fff;
            bottom: 0px;
            right: 0px;
            padding: 5px;
            white-space: nowrap;
            border: 1px solid rgba(128, 128, 128, 0.3);
            border-radius: 4px;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
                rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

        }
    }

    & .fa {
        text-align: center;
    }
}
</style>