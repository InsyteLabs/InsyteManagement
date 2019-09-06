<template>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Rate</th>
                <th>Qualifier</th>
                <th>Manage</th>
            </tr>
        </thead>
        <tbody v-if="products && products.length">
            <tr v-for="product of products" :key="product.id">
                <td>{{ product.id }}</td>
                <td>{{ product.name }}</td>
                <td>{{ product.description | truncate(100) }}</td>
                <td>{{ product.rate | currency }}</td>
                <td>{{ product.qualifier }}</td>
                <td></td>
            </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
'use strict';

import { Vue, Component, Prop } from 'vue-property-decorator';

import { IProduct } from '@/interfaces';

@Component
export default class ProductList extends Vue{
    @Prop() products!: IProduct[];
}
</script>

<style scoped lang="sass">

</style>