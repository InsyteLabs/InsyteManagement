<template>
    <div class="container-fluid">
        <ProductList
            :products="products">
        </ProductList>
    </div>
</template>

<script lang="ts">
'use strict';

import { Vue, Component } from 'vue-property-decorator';

import { entityService } from '@/services';
import { IProduct }      from '@/interfaces';
import ProductList       from '@/components/ProductList.vue';

@Component({
    components: {
        ProductList
    }
})
export default class Products extends Vue{
    private entityService = entityService;

    products: IProduct[] = [];

    created(): void{
        this.entityService.getProducts()
            .then((products: IProduct[]) => {
                this.products = products;
            });
    }
}
</script>

<style>

</style>