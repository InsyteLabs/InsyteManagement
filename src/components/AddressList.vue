<template>
    <div class="card">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Street 1</th>
                    <th>Street 2</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip</th>
                    <th>Manage</th>
                </tr>
            </thead>
            <tbody v-if="addresses && addresses.length">
                <tr v-for="address of addresses" :key="address.id">
                    <td>{{ address.id }}</td>
                    <td>{{ address.name }}</td>
                    <td>{{ address.street1 }}</td>
                    <td>{{ address.street2 }}</td>
                    <td>{{ address.city }}</td>
                    <td>{{ address.state }}</td>
                    <td>{{ address.zip }}</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
'use strict';

import { Vue, Component, Prop } from 'vue-property-decorator';

import { IAddress } from '@/interfaces';

@Component
export default class AddressList extends Vue {

    @Prop() addresses!: IAddress[];
}
</script>

<style scoped lang="sass">

</style>