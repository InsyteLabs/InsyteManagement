<template>
    <div class="container-fluid">
        <AddressList
            :addresses="addresses">
        </AddressList>
    </div>
</template>

<script lang="ts">
'use strict';

import { Vue, Component } from 'vue-property-decorator';

import { entityService } from '@/services';
import { IAddress }      from '@/interfaces';
import AddressList       from '@/components/AddressList.vue';

@Component({
    components: {
        AddressList
    }
})
export default class Addresses extends Vue {

    private entityService = entityService;
    
    addresses: IAddress[] = [];

    created(){
        this.entityService.getAddresses()
            .then((addresses: IAddress[]) => {
                this.addresses = addresses;
            });
    }
}
</script>

<style>

</style>