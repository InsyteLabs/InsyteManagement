<template>
    <div id="product-form" class="container-fluid">
        <h3>
            {{
                newProduct
                    ? 'Create Product'
                    : 'Edit Product'
            }}
        </h3>
        <div class="row">
            <div class="col-12">
                <!-- PRODUCT NAME -->
                <div class="form-group">
                    <label for="name">Product Name</label>
                    <div class="input-group">
                        <input v-model="name" type="text" id="name" class="form-control">
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <!-- RATE -->
                <div class="form-group">
                    <label for="rate">Rate</label>
                    <div class="input-group">
                        <input v-model="rate" type="text" id="rate" class="form-control">
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <!-- QUALIFIER -->
                <div class="form-group">
                    <label for="qualifier"> Qualifier </label>
                    <div class="input-group">
                        <select v-model="qualifier" id="qualifier" class="form-control">
                            <option value="">Select</option>
                            <option value="Hour">Hour</option>
                            <option value="Day">Day</option>
                            <option value="Month">Month</option>
                            <option value="Year">Year</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <!-- DESCRIPTION -->
                <div class="form-group">
                    <label for="description">Description</label>
                    <div class="input-group">
                        <textarea v-model="description" id="description" rows="4" class="form-control"></textarea>
                    </div>
                </div>
            </div>
        </div>
        <button @click="saveProduct()" class="btn btn-success">
            {{
                newProduct
                    ? 'Create Product'
                    : 'Update Product'
            }}
        </button>
    </div>
</template>

<script lang="ts">
'use strict';

import { Vue, Component, Prop, Watch, Emit } from 'vue-property-decorator';

import { IProduct } from '@/interfaces';

@Component
export default class ProductForm extends Vue{

    @Prop() newProduct!: boolean;
    @Prop() product!:    IProduct;

    // Form fields
    name:        string = '';
    rate:        string = '';
    qualifier:   string = '';
    description: string = '';

    saveProduct(): void{
        const product: IProduct = {
            name:         this.name,
            rate:        +this.rate,
            qualifier:    this.qualifier,
            description:  this.description
        }

        if(this.newProduct){
            this.createProduct(product);
        }
        else{
            product.id = this.product.id;
            this.updateProduct(product);
        }
    }


    /*
        ========
        WATCHERS
        ========
    */
    @Watch('product')
    productWatcher(product: IProduct): void{
        product ? this._initForm() : this._clearForm();
    }


    /*
        ==============
        EVENT EMITTERS
        ==============
    */
    @Emit('createProduct')
    createProduct(product: IProduct): void{ }

    @Emit('updateProduct')
    updateProduct(product: IProduct): void{ }


    /*
        ===============
        PRIVATE METHODS
        ===============
    */
    private _initForm(): void{
        if(!this.product) return;

        this.name        = this.product.name;
        this.rate        = `${ this.product.rate }`;
        this.qualifier   = this.product.qualifier;
        this.description = this.product.description;
    }

    private _clearForm(): void{
        this.name        = '';
        this.rate        = '';
        this.qualifier   = '';
        this.description = '';
    }
}
</script>

<style scoped lang="sass">

</style>