<template>
    <div id="app">
        <Banner
            @toggleNav="onToggleNav($event);">
        </Banner>
        <Navigation
            :visible="navigationVisible">
        </Navigation>

        <div class="container-fluid">
            <router-view />
        </div>
    </div>
</template>

<script lang="ts">
'use strict';

import { Vue, Component } from 'vue-property-decorator';

import Banner     from '@/components/Banner.vue';
import Navigation from '@/components/Navigation.vue';

@Component({
    components: {
        Banner,
        Navigation
    }
})
export default class App extends Vue{
    navigationVisible: boolean = true;

    onToggleNav(){
        this.navigationVisible = !this.navigationVisible;
    }
}


</script>

<style lang="sass">

@import './style/bootstrap.min.css'
@import './style/main.sass'

#app
    font-family: "Avenir", Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    color: #2c3e50
</style>
