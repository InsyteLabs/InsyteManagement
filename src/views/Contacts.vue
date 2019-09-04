<template>
    <div class="container-fluid">
        <ModalWindow @modalActiveStateChange="onModalActiveStateChange($event)" ref="modalWindow">
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
                    <h1 class="mt-5 mb-3">Contacts</h1>
                </div>
                <div class="col-md-4 text-right">
                    <button @click="onNewContactClick" class="btn bg-primary mb-2">
                        <span class="text-large">&plus;</span> Contact
                    </button>
                    <input v-model="filter" type="text" class="form-control mb-3" placeholder="Filter Contacts">
                </div>
            </div>
            <ContactList
                :contacts="contacts"
                @editContact="onEditContactClick($event)">
            </ContactList>
        </div>
    </div>
</template>

<script lang="ts">
'use strict';

import { Vue, Component, Ref, Watch } from 'vue-property-decorator';

import { entityService } from '@/services';
import { IContact }      from '@/interfaces';

import ModalWindow from '@/components/ModalWindow.vue';
import ContactList from '@/components/ContactList.vue';
import ContactForm from '@/components/forms/ContactForm.vue';

@Component({
    components: {
        ModalWindow,
        ContactList,
        ContactForm
    }
})
export default class Contacts extends Vue {
    @Ref('modalWindow') modalWindow!: ModalWindow;

    private entityService = entityService;

    filter: string = '';

    _contacts:       IContact[]      = [];
    contacts:        IContact[]      = [];
    selectedContact: IContact | null = null;
    newContact:      boolean         = true;

    /*
        =====
        HOOKS
        =====
    */
    created(){
        this._loadContacts();
    }
    
    /*
        ==============
        EVENT HANDLERS
        ==============
    */
    onNewContactClick(): void{
        this.selectedContact = null;
        this.newContact      = true;

        this.modalWindow.openModal();
    }

    onEditContactClick(contact: IContact): void{
        this.selectedContact = contact;
        this.newContact      = false;

        this.modalWindow.openModal();
    }

    onCreateContact(contact: IContact): void{
        this.entityService.createContact(contact)
            .then((newContact: IContact) => {
                this._loadContacts();

                this.modalWindow.closeModal();
                this.selectedContact = null;
                this.newContact      = true;
            });
    }

    onUpdateContact(contact: IContact): void{
        this.entityService.updateContact(contact)
            .then((updatedContact: IContact) => {
                this._loadContacts();

                this.modalWindow.closeModal();
                this.selectedContact = null;
                this.newContact      = true;
            });
    }

    onModalActiveStateChange(active: boolean): void{
        if(!active){
            this.selectedContact = null;
            this.newContact      = false;
        }
    }


    /*
        ========
        WATCHERS
        ========
    */
    @Watch('filter')
    filterWatcher(val: string){
        if(!val)            return this.contacts = this._contacts;
        if(!this._contacts) return;

        const exp = new RegExp(this.filter, 'i');
        this.contacts = this._contacts.filter(c => {
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
    private _loadContacts(): void{
        this.entityService.getContacts()
            .then((contacts: IContact[]) => {
                this._contacts = this.contacts = contacts;
            });
    }
}
</script>

<style scoped lang="sass">

</style>