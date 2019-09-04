<template>
    <div class="container-fluid">
        <ModalWindow @modalActiveStateChange="onModalActiveStateChange($event);" ref="modalWindow">
            <h1>Here is some dynamic content</h1>
        </ModalWindow>

        <button @click="openModal" class="btn btn-primary">Open Modal</button>
    </div>
</template>

<script lang="ts">
'use strict';

import { Component, Vue, Ref } from 'vue-property-decorator';
import ModalWindow from '@/components/ModalWindow.vue';

@Component({
    components: {
        ModalWindow
    }
})
export default class Home extends Vue {

    @Ref('modalWindow') private modalWindow!: ModalWindow;

    openModal(): void{
        this.modalWindow.openModal();
    }

    onModalActiveStateChange(active: boolean): void{

    }
}
</script>

<style scoped lang="sass">

@import '@/style/variables'

</style>
