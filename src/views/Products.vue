<template>
    <div class="container-fluid">
        <ModalWindow @modalActiveStateChange="onModalActiveStateChange($event)" ref="modalWindow">
            <ProductForm
                :product="selectedProduct"
                :newProduct="newProduct"

                @createProduct="onCreateProduct($event)"
                @updateProduct="onUpdateProduct($event)">
            </ProductForm>
        </ModalWindow>

        <div class="card pt-3">
            <div class="row px-4">
                <div class="col-md-8">
                    <h1 class="mt-5 mb-3">Products</h1>
                </div>
                <div class="col-md-4 text-right">
                    <button @click="onNewProductClick()" class="btn bg-primary mb-2">
                        <span class="text-large">&plus;</span> Product
                    </button>
                    <input v-model="filter" type="text" class="form-control mb-3" placeholder="Filter Products">
                </div>
            </div>
            <ProductList
                :products="products">
            </ProductList>
        </div>
    </div>
</template>

<script lang="ts">
'use strict';

import { Vue, Component, Watch, Ref } from 'vue-property-decorator';

import { entityService } from '@/services';
import { IProduct }      from '@/interfaces';

import ModalWindow from '@/components/ModalWindow.vue';
import ProductList from '@/components/ProductList.vue';
import ProductForm from '@/components/forms/ProductForm.vue';

@Component({
    components: {
        ModalWindow,
        ProductList,
        ProductForm
    }
})
export default class Products extends Vue{
    @Ref('modalWindow') modalWindow!: ModalWindow;

    private entityService = entityService;

    filter: string = '';

    _products:       IProduct[]      = [];
    products:        IProduct[]      = [];
    selectedProduct: IProduct | null = null;
    newProduct:      boolean         = false;

    /*
        =====
        HOOKS
        =====
    */
    created(): void{
        this._loadProducts();
    }


    /*
        ==============
        EVENT HANDLERS
        ==============
    */
    onNewProductClick(): void{
        this.selectedProduct = null;
        this.newProduct      = true;

        this.modalWindow.openModal();
    }

    onEditProductClick(product: IProduct): void{
        this.selectedProduct = product;
        this.newProduct      = false;
        
        this.modalWindow.openModal();
    }

    onCreateProduct(product: IProduct): void{
        this.entityService.createProduct(product)
            .then((newProduct: IProduct) => {
                this._loadProducts();

                this.modalWindow.closeModal();
                this.selectedProduct = null;
                this.newProduct      = false;
            });
    }

    onModalActiveStateChange(active: boolean): void{
        if(!active){
            this.selectedProduct = null;
            this.newProduct      = false;
        }
    }

    /*
        ========
        WATCHERS
        ========
    */
    @Watch('filter')
    filterWatcher(val: string){
        if(!val) return this.products = this._products;
        if(!this._products) return;

        const exp = new RegExp(this.filter, 'i');

        this.products = this._products.filter(p => {
            for(const prop in p){
                if(exp.test(String(p[prop]))) return true;
            }
            return false;
        });
    }


    /*
        ===============
        PRIVATE METHODS
        ===============
    */
    private _loadProducts(): void{
        this.entityService.getProducts()
            .then((products: IProduct[]) => {
                this._products = this.products = products;
            })
    }
}
</script>

<style>

</style>