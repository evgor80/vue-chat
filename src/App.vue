<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style lang="scss">
::-webkit-scrollbar {
  width: 6px;

  &-track {
    -webkit-box-shadow: inset 0 0 5px grey;
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  &-thumb {
    background: #40800083;
    border-radius: 10px;

    &:hover {
      background: rgba(0, 100, 0, 0.3);
    }
  }
}

.button {
    display: inline-block;
    cursor: pointer;
    text-align: center;
    background-color: rgba(132, 177, 78, 0.7);
    border-radius: 4px;
    color: #fff;
    font-size: 1em;
    line-height: 1.6em;
    padding: 0.8em 0;
    font-family: sans-serif;
    transition: 0.4s;
    margin: 15px 0;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    &:focus,
    &:hover {
        background-color: rgb(148, 186, 101);
        transition: 0.4s;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    &:active {
        box-shadow: 2px 2px 5px rgb(148, 186, 101);
    }

    &--half-width {
        width: 50%;
    }

    &--disabled {
        background-color: rgba(83, 90, 74, 0.6);
        cursor: default;
        pointer-events: none;
        box-shadow: none;

        &:focus,
        &:hover {
            background-color: rgba(83, 90, 74, 0.6);
        }
    }

    &--no-shadow {
        box-shadow: none;
        border-radius: 0px;

        &:focus,
        &:hover {
            box-shadow: none;
        }

        &:active {
            box-shadow: 2px 2px 5px rgb(148, 186, 101);
        }
    }
}
</style>
