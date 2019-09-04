<template>
    <div id="contact-form" class="container-fluid">
        <h3>
            {{
                newContact
                    ? 'Create Contact'
                    : 'Edit Contact'
            }}
        </h3>
        <div class="row">
            <!-- FIRST NAME -->
            <div class="col-md-6">
                <div class="form-group">
                    <label for="first-name">First Name</label>
                    <div class="input-group">
                        <input v-model="firstName" type="text" id="first-name" class="form-control">
                    </div>
                </div>
            </div>
            <!-- LAST NAME -->
            <div class="col-md-6">
                <div class="form-group">
                    <label for="last-name">Last Name</label>
                    <div class="input-group">
                        <input v-model="lastName" type="text" id="last-name" class="form-control">
                    </div>
                </div>
            </div>
            <!-- EMAIL -->
            <div class="col-12">
                <div class="form-group">
                    <label for="email">Email</label>
                    <div class="input-group">
                        <input v-model="email" type="text" id="email" class="form-control">
                    </div>
                </div>
            </div>
            <!-- MOBILE -->
            <div class="col-md-6">
                <div class="form-group">
                    <label for="mobile">Mobile Phone</label>
                    <div class="input-group">
                        <input v-model="mobile" type="text" id="mobile" class="form-control">
                    </div>
                </div>
            </div>
            <!-- WORK -->
            <div class="col-md-6">
                <div class="form-group">
                    <label for="work">Work Phone</label>
                    <div class="input-group">
                        <input v-model="work" type="text" id="work" class="form-control">
                    </div>
                </div>
            </div>
            <!-- FAX -->
            <div class="col-md-6">
                <div class="form-group">
                    <label for="fax">Fax Number</label>
                    <div class="input-group">
                        <input v-model="fax" type="text" id="fax" class="form-control">
                    </div>
                </div>
            </div>
        </div>
        <button @click="saveContact" class="btn btn-success">
            {{
                newContact
                    ? 'Create Contact'
                    : 'Update Contact'
            }}
        </button>
    </div>
</template>

<script lang="ts">
'use strict';

import { Vue, Component, Prop, Emit, Watch } from 'vue-property-decorator';

import { IContact } from '../../interfaces';

@Component
export default class ContactForm extends Vue {
    
    @Prop() newContact!: boolean;
    @Prop() contact!:    IContact;

    firstName: string = '';
    lastName:  string = '';
    email:     string = '';
    mobile:    string = '';
    work:      string = '';
    fax:       string = '';

    saveContact(): void{
        const contact: IContact = {
            firstName: this.firstName,
            lastName:  this.lastName,
            email:     this.email,
            mobile:    this.mobile,
            work:      this.work,
            fax:       this.fax
        }

        if(this.newContact){
            this.createContact(contact);
        }
        else{
            contact.id = this.contact.id;
            this.updateContact(contact);
        }
    }

    /*
        ========
        WATCHERS
        ========
    */
    @Watch('contact')
    contactWatcher(contact: IContact): void{
        contact ? this._initForm() : this._clearForm();
    }

    /*
        ==============
        EVENT EMITTERS
        ==============
    */
    @Emit('createContact')
    createContact(contact: IContact): void{ }

    @Emit('updateContact')
    updateContact(contact: IContact): void{ }


    /*
        ===============
        PRIVATE METHODS
        ===============
    */
    private _initForm(): void{
        if(!this.contact) return;

        this.firstName = this.contact.firstName;
        this.lastName  = this.contact.lastName;
        this.email     = this.contact.email;
        this.mobile    = this.contact.mobile;
        this.work      = this.contact.work;
        this.fax       = this.contact.fax;
    }

    private _clearForm(): void{
        this.firstName = '';
        this.lastName  = '';
        this.email     = '';
        this.mobile    = '';
        this.work      = '';
        this.fax       = '';
    }
}
</script>

<style scoped lang="sass">

</style>