<template>
    <div class="container-fluid">
        <ModalWindow @modalActiveStateChange="onModalActiveStateChange($event)" :size="'large'" ref="companyModal">
            <CompanyForm
                ref="companyForm"
                :company="selectedCompany"
                :newCompany="newCompany"

                @createCompany="onCreateCompany($event)"
                @updateCompany="onUpdateCompany($event)"
                @editContactClick="onEditContactClick($event)"
                @addContactClick="onAddContactClick()">
            </CompanyForm>
        </ModalWindow>

        <ModalWindow @modalActiveStateChange="onContactModalStateChange($event)" ref="contactModal">
            <ContactForm
                :contact="selectedContact"
                :newContact="newContact"

                @createContact="onCreateContact($event)"
                @updateContact="onUpdateContact($event)">
            </ContactForm>
        </ModalWindow>

        <div class="card pt-3">
            <div class="row px-4">
                <div class="col-md-8">
                    <h1 class="mt-5 mb-3">Companies</h1>
                </div>
                <div class="col-md-4 text-right">
                    <button @click="onNewCompanyClick()" class="btn bg-primary mb-2">
                        <span class="text-large">&plus;</span> Company
                    </button>
                    <input v-model="filter" type="text" class="form-control mb-3" placeholder="Filter Companies">
                </div>
            </div>
            <CompanyList
                :companies="companies"
                @editCompany="onEditCompanyClick($event)"
                @editContactClick="onEditContactClick($event)">
            </CompanyList>
        </div>
    </div>
</template>

<script lang="ts">
'use strict';

import { Vue, Component, Ref, Watch } from 'vue-property-decorator';

import { entityService } from '@/services';
import { ICompany, IContact }      from '@/interfaces';

import ModalWindow from '@/components/ModalWindow.vue';
import CompanyList from '@/components/CompanyList.vue';
import CompanyForm from '@/components/forms/CompanyForm.vue';
import ContactForm from '@/components/forms/ContactForm.vue';

@Component({
    components: {
        ModalWindow,
        CompanyList,
        CompanyForm,
        ContactForm
    }
})
export default class Companies extends Vue{
    @Ref('companyModal') companyModal!: ModalWindow;
    @Ref('companyForm')  companyForm!:  CompanyForm;
    @Ref('contactModal') contactModal!: ModalWindow;

    private entityService = entityService;

    filter: string = '';

    _companies:      ICompany[]      = [];
    companies:       ICompany[]      = [];
    selectedCompany: ICompany | null = null;
    newCompany:      boolean         = true;

    selectedContact: IContact | null = null;
    newContact:      boolean         = false;

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

        this.companyModal.openModal();
    }

    onEditCompanyClick(company: ICompany): void{
        this.selectedCompany = company;
        this.newCompany      = false;

        this.companyModal.openModal();
    }

    onCreateCompany(company: ICompany): void{
        this.entityService.createCompany(company)
            .then((updatedCompany: ICompany) => {
                this._loadCompanies();

                this.companyModal.closeModal();
                this.selectedCompany = null;
                this.newCompany      = false;
            });
    }

    onUpdateCompany(company: ICompany): void{
        this.entityService.updateCompany(company)
            .then((updatedCompany: ICompany) => {
                this._loadCompanies();

                this.selectedCompany = updatedCompany;
                this.companyForm.init();
            });
    }

    onModalActiveStateChange(active: boolean): void{
        
    }

    onContactModalStateChange(active: boolean): void{

    }

    onAddContactClick(): void{
        this.selectedContact = null;
        this.newContact      = true;

        this.companyModal.closeModal();
        this.contactModal.openModal();
    }

    onEditContactClick(contact: IContact): void{
        this.selectedContact = contact;
        this.newContact      = false;

        this.companyModal.closeModal();
        this.contactModal.openModal();
    }

    onCreateContact(contact: IContact): void{
        this.entityService.createContact(contact)
            .then((newContact: IContact) => {
                if(this.selectedCompany){
                    this.selectedCompany.contacts.push(newContact);
                }

                this.contactModal.closeModal();
                this.companyModal.openModal();
            });
    }

    onUpdateContact(contact: IContact): void{
        this.entityService.updateContact(contact)
            .then((updatedContact: IContact) => {

                if(this.selectedCompany && this.selectedContact){
                    const { contacts } = this.selectedCompany;

                    const idx = contacts.indexOf(this.selectedContact);

                    if(~idx){
                        contacts.splice(idx, 1, updatedContact);
                    }
                }

                this.contactModal.closeModal();
                this.companyModal.openModal();
            });
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
    private _loadCompanies(): Promise<ICompany[]>{
        return new Promise((resolve, reject) => {
            this.entityService.getCompanies()
                .then((companies: ICompany[]) => {
                    this._companies = this.companies = companies;

                    resolve(companies);
                });
        });
    }
}
</script>

<style scoped lang="sass">

</style>