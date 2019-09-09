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
            <!-- TITLE -->
            <div class="col-12">
                <div class="form-group">
                    <label for="title">Title</label>
                    <div class="input-group">
                        <input v-model="title" type="text" id="title" class="form-control">
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <!-- EMAILS -->
            <div class="col-12 mb-4">
                <h5>Emails</h5>
                <table class="table table-striped table-sm mb-1">
                    <thead>
                        <tr>
                            <th>Address</th>
                            <th>Type</th>
                            <th>Primary</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="email of emails" :key="email.address">
                            <td>{{ email.address }}</td>
                            <td>{{ email.type }}</td>
                            <td>
                                {{
                                    email.primary
                                        ? 'Yes'
                                        : 'No'
                                }}
                            </td>
                            <td>
                                <button @click="editEmailClick(email)" class="btn btn-sm btn-primary mr-1">
                                    <svg class="btn-icon pencil" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M493.255 56.236l-37.49-37.49c-24.993-24.993-65.515-24.994-90.51 0L12.838 371.162.151 485.346c-1.698 15.286 11.22 28.203 26.504 26.504l114.184-12.687 352.417-352.417c24.992-24.994 24.992-65.517-.001-90.51zm-95.196 140.45L174 420.745V386h-48v-48H91.255l224.059-224.059 82.745 82.745zM126.147 468.598l-58.995 6.555-30.305-30.305 6.555-58.995L63.255 366H98v48h48v34.745l-19.853 19.853zm344.48-344.48l-49.941 49.941-82.745-82.745 49.941-49.941c12.505-12.505 32.748-12.507 45.255 0l37.49 37.49c12.506 12.506 12.507 32.747 0 45.255z"></path>
                                    </svg>
                                </button>
                                <button @click="deleteEmailClick(email)" class="btn btn-sm btn-danger">
                                    <svg class="btn-icon delete" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M296 432h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zm-160 0h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zM440 64H336l-33.6-44.8A48 48 0 0 0 264 0h-80a48 48 0 0 0-38.4 19.2L112 64H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h24v368a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V96h24a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8zM171.2 38.4A16.1 16.1 0 0 1 184 32h80a16.1 16.1 0 0 1 12.8 6.4L296 64H152zM384 464a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V96h320zm-168-32h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8z"></path>
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div v-if="isAddEmail || isEditEmail" class="row">
                    <div class="col-md-5">
                        <div class="form-group mb-1">
                            <label for="email">Address</label>
                            <div class="input-group">
                                <input v-model="email" type="text" id="email" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group mb-1">
                            <label for="email-type">Type</label>
                            <div class="input-group">
                                <select v-model="emailType" id="email-type" class="form-control">
                                    <option value="">Select</option>
                                    <option v-for="type of emailTypes" :key="type.value" :value="type.value">{{ type.label }}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group mb-1">
                            <label for="email-primary">Primary</label>
                            <div class="input-group">
                                <select v-model="emailPrimary" id="email-primary" class="form-control">
                                    <option value="0">No</option>
                                    <option value="1">Yes</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <button @click="saveEmailClick()" class="btn btn-sm btn-success mr-1">
                            {{
                                isAddEmail
                                    ? 'Add'
                                    : 'Update'
                            }}
                        </button>
                        <button @click="cancelEmailClick()" class="btn btn-sm btn-danger">Cancel</button>
                    </div>
                </div>
                <button v-if="!(isAddEmail || isEditEmail)" @click="addEmailClick()" class="btn btn-sm btn-primary">&plus; Email</button>
            </div>
            <!-- PHONES -->
            <div class="col-12">
                <h5>Phones</h5>
                <table class="table table-striped table-sm mb-1">
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Type</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="phone of phones" :key="phone.number">
                            <td>{{ phone.number }}</td>
                            <td>{{ phone.type }}</td>
                            <td>
                                <button @click="editPhoneClick(phone)" class="btn btn-sm btn-primary mr-1">
                                    <svg class="btn-icon pencil" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M493.255 56.236l-37.49-37.49c-24.993-24.993-65.515-24.994-90.51 0L12.838 371.162.151 485.346c-1.698 15.286 11.22 28.203 26.504 26.504l114.184-12.687 352.417-352.417c24.992-24.994 24.992-65.517-.001-90.51zm-95.196 140.45L174 420.745V386h-48v-48H91.255l224.059-224.059 82.745 82.745zM126.147 468.598l-58.995 6.555-30.305-30.305 6.555-58.995L63.255 366H98v48h48v34.745l-19.853 19.853zm344.48-344.48l-49.941 49.941-82.745-82.745 49.941-49.941c12.505-12.505 32.748-12.507 45.255 0l37.49 37.49c12.506 12.506 12.507 32.747 0 45.255z"></path>
                                    </svg>
                                </button>
                                <button @click="deletePhoneClick(phone)" class="btn btn-sm btn-danger">
                                    <svg class="btn-icon delete" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M296 432h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zm-160 0h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zM440 64H336l-33.6-44.8A48 48 0 0 0 264 0h-80a48 48 0 0 0-38.4 19.2L112 64H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h24v368a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V96h24a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8zM171.2 38.4A16.1 16.1 0 0 1 184 32h80a16.1 16.1 0 0 1 12.8 6.4L296 64H152zM384 464a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V96h320zm-168-32h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8z"></path>
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div v-if="isAddPhone || isEditPhone" class="row">
                    <div class="col-md-8">
                        <div class="form-group mb-1">
                            <label for="number">Number</label>
                            <div class="input-group">
                                <input v-model="number" type="text" id="number" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group mb-1">
                            <label for="phone-type">Type</label>
                            <div class="input-group">
                                <select v-model="phoneType" id="phone-type" class="form-control">
                                    <option value="">Select</option>
                                    <option v-for="type of phoneTypes" :key="type.value" :value="type.value">{{ type.label }}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <button @click="savePhoneClick()" class="btn btn-sm btn-success mr-1">
                            {{
                                isAddPhone
                                    ? 'Add'
                                    : 'Update'
                            }}
                        </button>
                        <button @click="cancelPhoneClick()" class="btn btn-sm btn-danger">Cancel</button>
                    </div>
                </div>
                <button v-if="!(isAddPhone || isEditPhone)" @click="addPhoneClick()" class="btn btn-sm btn-primary">&plus; Phone</button>
            </div>
        </div>
        <button @click="saveContact" class="btn btn-success mt-3">
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

import { EmailAddressType, PhoneNumberType }     from '@/constants'
import { IContact, IEmailAddress, IPhoneNumber } from '@/interfaces';

@Component
export default class ContactForm extends Vue{
    
    @Prop() newContact!: boolean;
    @Prop() contact!:    IContact;

    // Form fields
    firstName: string = '';
    lastName:  string = '';
    title:     string = '';

    emails: IEmailAddress[] = [];
    phones: IPhoneNumber[]  = [];

    // Email fields
    isAddEmail:    boolean = false;
    isEditEmail:   boolean = false;
    email:         string  = '';
    emailType:     string  = '';
    emailPrimary:  string  = '0';
    selectedEmail: IEmailAddress | null = null;

    emailTypes = Object.keys(EmailAddressType).map(k => ({
        label: EmailAddressType[k],
        value: EmailAddressType[k]
    }));

    // Phone fields
    isAddPhone:    boolean = false;
    isEditPhone:   boolean = false;
    number:        string  = '';
    phoneType:     string  = '';
    selectedPhone: IPhoneNumber | null = null;

    phoneTypes = Object.keys(PhoneNumberType).map(k => ({
        label: PhoneNumberType[k],
        value: PhoneNumberType[k]
    }));

    saveContact(): void{
        const contact: IContact = {
            firstName: this.firstName,
            lastName:  this.lastName,
            title:     this.title,
            emails:    this.emails,
            phones:    this.phones
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
        =============
        EMAIL METHODS
        =============
    */
    addEmailClick(): void{
        this.resetEmailForm();

        this.isEditEmail = false;
        this.isAddEmail  = true;
    }

    editEmailClick(email: IEmailAddress): void{
        this.selectedEmail = email;
        this.email         = email.address;
        this.emailType     = email.type;
        this.emailPrimary  = email.primary ? '1' : '0';

        this.isEditEmail = true;
    }

    saveEmailClick(){
        const email: IEmailAddress = {
            address: this.email,
            type:    this.emailType,
            primary: Boolean(+this.emailPrimary)
        }

        if(this.isAddEmail){
            this.emails.push(email);
        }
        else{
            const idx = this.emails.indexOf(this.selectedEmail as IEmailAddress);

            if(~idx){
                this.emails.splice(idx, 1, email);
            }
        }
        this.cancelEmailClick();
    }

    deleteEmailClick(email: IEmailAddress): void{
        const idx = this.emails.indexOf(email);

        if(~idx){
            this.emails.splice(idx, 1);
        }
    }

    cancelEmailClick(): void{
        this.isAddEmail = this.isEditEmail = false;

        this.resetEmailForm();
    }

    resetEmailForm(): void{
        this.email         = '';
        this.emailType     = '';
        this.emailPrimary  = '0';
        this.selectedEmail = null;
    }


    /*
        =============
        PHONE METHODS
        =============
    */
    addPhoneClick(): void{
        this.resetPhoneForm();

        this.isEditPhone = false;
        this.isAddPhone  = true;
    }

    editPhoneClick(phone: IPhoneNumber): void{
        this.selectedPhone = phone;
        this.number        = phone.number;
        this.phoneType     = phone.type;

        this.isEditPhone = true;
    }

    savePhoneClick(): void{
        const phone: IPhoneNumber = {
            number: this.number,
            type:   this.phoneType
        }

        if(this.isAddPhone){
            this.phones.push(phone);
        }
        else{
            const idx = this.phones.indexOf(this.selectedPhone as IPhoneNumber);

            if(~idx){
                this.phones.splice(idx, 1, phone);
            }
        }
        this.cancelPhoneClick();
    }

    deletePhoneClick(phone: IPhoneNumber): void{
        const idx = this.phones.indexOf(phone);

        if(~idx){
            this.phones.splice(idx, 1);
        }
    }

    cancelPhoneClick(): void{
        this.isAddPhone = this.isEditPhone = false;

        this.resetPhoneForm();
    }

    resetPhoneForm(): void{
        this.number        = '';
        this.phoneType     = '';
        this.selectedPhone = null;
    }


    /*
        ===============
        PRIVATE METHODS
        ===============
    */
    private _initForm(): void{
        if(!this.contact) return;

        this.firstName = this.contact.firstName;
        this.lastName  = this.contact.lastName;
        this.title     = this.contact.title;
        this.emails    = this.contact.emails;
        this.phones    = this.contact.phones;
    }

    private _clearForm(): void{
        this.firstName = '';
        this.lastName  = '';
        this.title     = '';

        this.emails = [];
        this.phones = [];
    }
}
</script>

<style scoped lang="sass">

</style>