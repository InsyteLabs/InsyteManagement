<template>
    <div class="container-fluid">
        <ModalWindow @modalActiveStateChange="onModalActiveStateChange($event)" :size="'large'" ref="modalWindow">
            <CompanyForm
                :company="selectedCompany"
                :newCompany="newCompany"

                @createCompany="onCreateCompany($event)"
                @updateCompany="onUpdateCompany($event)">
            </CompanyForm>
        </ModalWindow>

        <div class="card pt-3">
            <div class="row px-4">
                <div class="col-md-8">
                    <h1 class="mt-5 mb-3">Companies</h1>
                </div>
                <div class="col-md-4 text-right">
                    <button @click="onNewCompanyClick" class="btn bg-primary mb-2">
                        <span class="text-large">&plus;</span> Company
                    </button>
                    <input v-model="filter" type="text" class="form-control mb-3" placeholder="Filter Companies">
                </div>
            </div>
            <CompanyList
                :companies="companies"
                @editCompany="onEditCompanyClick($event)">
            </CompanyList>
        </div>
    </div>
</template>

<script lang="ts">
'use strict';

import { Vue, Component, Ref, Watch } from 'vue-property-decorator';

import { entityService } from '@/services';
import { ICompany }      from '@/interfaces';

import ModalWindow from '@/components/ModalWindow.vue';
import CompanyList from '@/components/CompanyList.vue';
import CompanyForm from '@/components/forms/CompanyForm.vue';

@Component({
    components: {
        ModalWindow,
        CompanyList,
        CompanyForm
    }
})
export default class Companies extends Vue{
    @Ref('modalWindow') modalWindow!: ModalWindow;

    private entityService = entityService;

    filter: string = '';

    _companies:      ICompany[]      = [];
    companies:       ICompany[]      = [];
    selectedCompany: ICompany | null = null;
    newCompany:      boolean         = true;


    /*
        =====
        HOOKS
        =====
    */
    created(){
        this._loadCompanies();
    }


    /*
        ==============
        EVENT HANDLERS
        ==============
    */
    onNewCompanyClick(): void{
        this.selectedCompany = null;
        this.newCompany      = true;

        this.modalWindow.openModal();
    }

    onEditCompanyClick(company: ICompany): void{
        this.selectedCompany = company;
        this.newCompany      = false;

        this.modalWindow.openModal();
    }

    onCreateCompany(company: ICompany): void{
        this.entityService.createCompany(company)
            .then((updatedCompany: ICompany) => {
                this._loadCompanies();

                this.modalWindow.closeModal();
                this.selectedCompany = null;
                this.newCompany      = false;
            });
    }

    onModalActiveStateChange(active: boolean): void{
        if(!active){
            this.selectedCompany = null;
            this.newCompany      = true;
        }
    }

    /*
        ========
        WATCHERS
        ========
    */
    @Watch('filter')
    filterWatcher(val: string){
        if(!val)             return this.companies = this._companies;
        if(!this._companies) return;

        const exp = new RegExp(this.filter, 'i');

        this.companies = this._companies.filter(c => {
            for(const prop in c){
                if(exp.test(String(c[prop]))) return true;
            }
            return false;
        });
    }

    /*
        ===============
        PRIVATE METHODS
        ===============
    */
    private _loadCompanies(): void{
        this.entityService.getCompanies()
            .then((companies: ICompany[]) => {
                this._companies = this.companies = companies;
            });
    }
}
</script>

<style scoped lang="sass">

</style>