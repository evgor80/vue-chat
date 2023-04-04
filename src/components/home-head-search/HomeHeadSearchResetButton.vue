<template>
    <button class="search__reset-btn" @click="$emit('clicked')" aria-label="Сбросить поиск">
        X
    </button>
</template>

<style lang="scss">
.search__reset-btn {
    text-align: center;
    position: absolute;
    padding-top: 1px;
    top: 10px;
    right: 45px;
    width: 20px;
    height: 20px;
    background-color: #b3db82;
    border: 1px solid grey;
    border-radius: 50%;
    color: grey;
    cursor: pointer;
    transition: all .4s;

    &:focus,
    &:hover {
        border: 1px solid rgb(218, 77, 77);
        color: rgb(218, 77, 77);

        &:after {

            content: attr(aria-label);
            color: grey;
            position: absolute;
            display: inline-block;
            background-color: #fff;
            bottom: -40px;
            right: 0px;
            padding: 5px;
            white-space: nowrap;
            border: 1px solid rgba(128, 128, 128, 0.3);
            border-radius: 4px;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
                rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

        }
    }
}
</style>