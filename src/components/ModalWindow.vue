<template>
    <div @click="onModalBgClick($event);" ref="modalWindow" class="__modal-window__" :class="{ active: modalActive }">
        <div class="__modal-dialog__">
            <span ref="modalClose" class="__modal-close__ clickable text-right mb-0">CLOSE <span class="times">&times;</span></span>
        </div>
    </div>
</template>

<script lang="ts">
'use strict';

import { Vue, Component, Prop, Emit, Watch } from 'vue-property-decorator';

@Component
export default class ModalWindow extends Vue{

    modalActive: boolean = true;

    created(): void{ }

    onModalBgClick(event: MouseEvent): void{
        const { target } = event;

        if(
               target === this.$refs.modalWindow
            || target === this.$refs.modalClose
        ){
            this.closeModal();
        }
    }

    openModal(): void{
        this.modalActive = true;

        document.body.style.filter = `blur(4px);`

        this.modalActiveStateChange(true);
    }

    closeModal(): void{
        this.modalActive = false;
        this.modalActiveStateChange(false);
    }

    @Emit('modalActiveStateChange')
    modalActiveStateChange(active: boolean): void{ }

    @Watch('modalActive')
    modalActiveWatcher(active: boolean): void{
        console.log('Modal state changed from watch')
        console.log(`is: ${ active }`);
    }
}
</script>

<style scoped lang="sass">

@import '@/style/variables'

.__modal-window__
    position: fixed
    z-index: 1000
    top: -100%
    left: 0
    width: 100%
    height: 100%
    overflow-y: auto

    background-color: rgba($dark-gray, .75)
    
    &.active
        top: 0
        left: 0

        .__modal-dialog__
            opacity: 1
            margin: 100px auto
            transition: all .35s ease .1s

.__modal-dialog__
    width: 900px
    padding: 1rem

    margin: -100% auto
    opacity: 0
    
    // REMOVE
    min-height: 500px

    background-color: white

.__modal-close__
    position: relative
    float: right
    font-size: 1.1rem
    top: -5px

.__modal-close__ .times
    position: relative
    font-size: 1.9rem
    line-height: .2
    top: 3px
    left: 3px

</style>