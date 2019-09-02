<template>
    <nav :class="{ hidden: !visible }" id="nav">


        <router-link to="/">HOME</router-link>
    </nav>
</template>

<script lang="ts">
'use strict';

import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Navigation extends Vue {

    @Prop() visible!: boolean;

}
</script>

<style scoped lang="sass">

@import '@/style/variables'

a, a:visited, a:active, a:hover
    color: white
    display: block
    width: 100%
    padding: .6rem 1.2rem
    text-decoration: none

    &.router-link-active
        background-color: $purple

#nav
    position: fixed
    height: calc(100% - 80px)
    width: 250px
    background-color: $gray
    color: white

    left: 0
    top: 80px

    transition: all .2s ease-in-out

    &.hidden
        left: -250px

</style>