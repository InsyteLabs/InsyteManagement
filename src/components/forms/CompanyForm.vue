<template>
    <div id="company-form" class="container-fluid">
        <h3>
            {{
                newCompany
                    ? 'Create Company'
                    : 'Edit Company'
            }}
        </h3>
        <div class="row mb-4">
            <div class="col-md-7">
                <!-- COMPANY NAME -->
                <div class="form-group">
                    <label for="name">Name</label>
                    <div class="input-group">
                        <input v-model="name" type="text" id="name" class="form-control">
                    </div>
                </div>
                <!-- WEBSITE -->
                <div class="form-group">
                    <label for="webiste">Website</label>
                    <a v-if="website" :href="website" class="float-right" target="_blank" rel="noopener nofollow"><small>VISIT</small></a>
                    <div class="input-group">
                        <input v-model="website" type="text" id="website" class="form-control">
                    </div>
                </div>
            </div>
            <div class="col-md-5">
                <!-- CREATED -->
                <div class="form-group">
                    <label for="created">Created</label>
                    <div class="input-group">
                        <input v-model="createdOn" type="text" id="created" class="form-control" disabled="disabled">
                    </div>
                </div>
                <!-- MODIFIED -->
                <div class="form-group">
                    <label for="modified">Modified</label>
                    <div class="input-group">
                        <input v-model="modified" type="text" id="modified" class="form-control" disabled="disabled">
                    </div>
                </div>
                <!-- MODIFIED BY -->
                <div class="form-group">
                    <label for="modified-by">Modified By</label>
                    <div class="input-group">
                        <input v-model="modifiedBy" type="text" id="modified-by" class="form-control" disabled="disabled">
                    </div>
                </div>
            </div>
        </div>
        <div class="row mb-4">
            <!-- SOCIAL MEDIA -->
            <div class="col-md-7">
                <h5>Social Media</h5>
                <table class="table table-striped table-sm mb-1">
                    <thead>
                        <tr>
                            <th>URL</th>
                            <th>Type</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="link of socialMedia" :key="link.url">
                            <td>
                                <a :href="link.url" target="_blank" rel="noopener nofollow">{{ link.url | truncate(45) }}</a>
                            </td>
                            <td>{{ link.type }}</td>
                            <td>
                                <button @click="editLinkClick(link)" class="btn btn-sm btn-primary mr-1">
                                    <svg class="btn-icon pencil" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M493.255 56.236l-37.49-37.49c-24.993-24.993-65.515-24.994-90.51 0L12.838 371.162.151 485.346c-1.698 15.286 11.22 28.203 26.504 26.504l114.184-12.687 352.417-352.417c24.992-24.994 24.992-65.517-.001-90.51zm-95.196 140.45L174 420.745V386h-48v-48H91.255l224.059-224.059 82.745 82.745zM126.147 468.598l-58.995 6.555-30.305-30.305 6.555-58.995L63.255 366H98v48h48v34.745l-19.853 19.853zm344.48-344.48l-49.941 49.941-82.745-82.745 49.941-49.941c12.505-12.505 32.748-12.507 45.255 0l37.49 37.49c12.506 12.506 12.507 32.747 0 45.255z"></path>
                                    </svg>
                                </button>
                                <button @click="deleteLinkClick(link)" class="btn btn-sm btn-danger">
                                    <svg class="btn-icon delete" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M296 432h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zm-160 0h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zM440 64H336l-33.6-44.8A48 48 0 0 0 264 0h-80a48 48 0 0 0-38.4 19.2L112 64H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h24v368a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V96h24a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8zM171.2 38.4A16.1 16.1 0 0 1 184 32h80a16.1 16.1 0 0 1 12.8 6.4L296 64H152zM384 464a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V96h320zm-168-32h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8z"></path>
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div v-if="isEditLink || isAddLink" class="row mt-2">
                    <div class="col-md-8">
                        <div class="form-group mb-1">
                            <label for="link-url">URL</label>
                            <div class="input-group">
                                <input v-model="linkUrl" type="text" id="link-url" class="form-control form-control-sm">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group mb-1">
                            <label for="link-type">Type</label>
                            <div class="input-group">
                                <select v-model="linkType" id="link-type" class="form-control form-control-sm">
                                    <option value="">Select</option>
                                    <option v-for="type of linkTypes" :key="type.value" :value="type.value">{{ type.label }}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <button @click="saveLinkClick()" class="btn btn-sm btn-success mr-1">
                            {{
                                isAddLink
                                    ? 'Add'
                                    : 'Update'
                            }}
                        </button>
                        <button @click="cancelLinkClick()" class="btn btn-sm btn-danger">Cancel</button>
                    </div>
                </div>
                <button v-if="!(isEditLink || isAddLink)" @click="addLinkClick()" class="btn btn-sm btn-primary">&plus; Link</button>
            </div>
            <!-- PHONES -->
            <div class="col-md-5">
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
                <div v-if="isAddPhone || isEditPhone" class="row mt-2">
                    <div class="col-md-7">
                        <div class="form-group mb-1">
                            <label for="phone-number">Number</label>
                            <div class="input-group">
                                <input v-model="phoneNumber" type="text" id="phone-number" class="form-control form-control-sm">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="form-group mb-1">
                            <label for="phone-type">Type</label>
                            <div class="input-group">
                                <select v-model="phoneType" id="phone-type" class="form-control form-control-sm">
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
        <!-- ADDRESSES -->
        <div class="row mb-4">
            <div class="col-12">
                <h5>Addresses</h5>
                <table class="table table-striped table-sm mb-1">
                    <thead>
                        <tr>
                            <th>Alias</th>
                            <th>Street 1</th>
                            <th>Street 2</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Zip</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="address of addresses" :key="address.id">
                            <td>{{ address.alias }}</td>
                            <td>{{ address.street1 }}</td>
                            <td>{{ address.street2 }}</td>
                            <td>{{ address.city }}</td>
                            <td>{{ address.state }}</td>
                            <td>{{ address.zip }}</td>
                            <td>
                                <button @click="editAddressClick(address)" class="btn btn-sm btn-primary mr-1">
                                    <svg class="btn-icon pencil" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M493.255 56.236l-37.49-37.49c-24.993-24.993-65.515-24.994-90.51 0L12.838 371.162.151 485.346c-1.698 15.286 11.22 28.203 26.504 26.504l114.184-12.687 352.417-352.417c24.992-24.994 24.992-65.517-.001-90.51zm-95.196 140.45L174 420.745V386h-48v-48H91.255l224.059-224.059 82.745 82.745zM126.147 468.598l-58.995 6.555-30.305-30.305 6.555-58.995L63.255 366H98v48h48v34.745l-19.853 19.853zm344.48-344.48l-49.941 49.941-82.745-82.745 49.941-49.941c12.505-12.505 32.748-12.507 45.255 0l37.49 37.49c12.506 12.506 12.507 32.747 0 45.255z"></path>
                                    </svg>
                                </button>
                                <button @click="deleteAddressClick(address)" class="btn btn-sm btn-danger">
                                    <svg class="btn-icon delete" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M296 432h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zm-160 0h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zM440 64H336l-33.6-44.8A48 48 0 0 0 264 0h-80a48 48 0 0 0-38.4 19.2L112 64H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h24v368a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V96h24a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8zM171.2 38.4A16.1 16.1 0 0 1 184 32h80a16.1 16.1 0 0 1 12.8 6.4L296 64H152zM384 464a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V96h320zm-168-32h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8z"></path>
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button v-if="!(isAddAddress || isEditAddress)" @click="addAddressClick()" class="btn btn-sm btn-primary">&plus; Address</button>
            </div>
        </div>
        <div v-if="isAddAddress || isEditAddress" class="row mt-1 mb-4">
            <div class="col-12">
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="alias">Alias</label>
                            <div class="input-group">
                                <input v-model="alias" type="text" id="alias" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="street1">Street 1</label>
                            <div class="input-group">
                                <input v-model="street1" type="text" id="street1" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="street2">Street 2</label>
                            <div class="input-group">
                                <input v-model="street2" type="text" id="street2" class="form-control">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="city">City</label>
                            <div class="input-group">
                                <input v-model="city" type="text" id="city" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                            <label for="state">State</label>
                            <div class="input-group">
                                <select v-model="state" id="state" class="form-control">
                                    <option value="">Select</option>
                                    <option v-for="state of states" :key="state.name" :value="state.abbreviation">{{ state.name }}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                            <label for="zip">ZIP</label>
                            <div class="input-group">
                                <input v-model="zip" type="text" id="zip" class="form-control">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <button @click="saveAddressClick()" class="btn btn-sm btn-success mr-1">
                    {{
                        isAddAddress
                            ? 'Add'
                            : 'Update'
                    }}
                </button>
                <button @click="cancelAddressClick()" class="btn btn-sm btn-danger">Cancel</button>
            </div>
        </div>
        <button @click="saveCompany" class="btn btn-success">
            {{
                newCompany
                    ? 'Create Company'
                    : 'Update Company'
            }}
        </button>
    </div>
</template>

<script lang="ts">
'use strict';

import { Vue, Component, Prop, Emit, Watch } from 'vue-property-decorator';

import { ICompany, IContact, IAddress, IPhoneNumber, ISocialMediaLink, IState } from '@/interfaces';
import { PhoneNumberType, SocialMediaType, States }                     from '@/constants';

@Component
export default class CompanyForm extends Vue{

    @Prop() newCompany!: boolean;
    @Prop() company!:    ICompany;

    // Form fields
    name:       string = '';
    website:    string = '';
    createdOn:  string = '';
    modified:   string = '';
    modifiedBy: string = '';

    contacts:    IContact[]         = [];
    addresses:   IAddress[]         = [];
    phones:      IPhoneNumber[]     = [];
    socialMedia: ISocialMediaLink[] = [];

    // Link fields
    isEditLink:   boolean = false;
    isAddLink:    boolean = false;
    linkUrl:      string  = '';
    linkType:     string  = '';
    selectedLink: ISocialMediaLink | null = null;

    linkTypes = Object.keys(SocialMediaType).map(k => ({ label: SocialMediaType[k], value: SocialMediaType[k] }));

    // Phone fields
    isEditPhone:   boolean = false;
    isAddPhone:    boolean = false;
    phoneNumber:   string  = '';
    phoneType:     string  = '';
    selectedPhone: IPhoneNumber | null = null;

    phoneTypes = Object.keys(PhoneNumberType).map(k => ({ label: PhoneNumberType[k], value: PhoneNumberType[k] }));

    // Address Fields
    isEditAddress:   boolean  = false;
    isAddAddress:    boolean  = false;
    alias:           string   = '';
    street1:         string   = '';
    street2:         string   = '';
    city:            string   = '';
    state:           string   = '';
    zip:             string   = '';
    states:          IState[] = States;
    selectedAddress: IAddress | null = null;

    saveCompany(): void{
        const company: ICompany = {
            name:        this.name,
            website:     this.website,
            created:     this.createdOn,
            modified:    this.modified,
            modifiedBy:  this.modifiedBy,
            contacts:    this.contacts,
            addresses:   this.addresses,
            phones:      this.phones,
            socialMedia: this.socialMedia
        }

        if(this.newCompany){
            this.createCompany(company);
        }
        else{
            company.id = this.company.id;
            this.updateCompany(company);
        }
    }


    /*
        ========
        WATCHERS
        ========
    */
    @Watch('company')
    companyWatcher(company: ICompany): void{
        company ? this._initForm() : this._clearForm();
    }


    /*
        ==============
        EVENT EMITTERS
        ==============
    */
    @Emit('createCompany')
    createCompany(company: ICompany): void{ }

    @Emit('updateCompany')
    updateCompany(company: ICompany): void{ }


    /*
        ============
        LINK METHODS
        ============
    */
    addLinkClick(): void{
        this.resetLinkForm();

        this.isAddLink = true;
    }

    editLinkClick(link: ISocialMediaLink): void{
        this.selectedLink = link;
        this.linkUrl      = link.url;
        this.linkType     = link.type;

        this.isEditLink = true;
    }

    saveLinkClick(): void{
        const link: ISocialMediaLink = {
            url:  this.linkUrl,
            type: this.linkType
        }

        if(this.isAddLink){
            this.socialMedia.push(link);
        }
        else{
            const idx = this.socialMedia.indexOf(this.selectedLink as ISocialMediaLink);

            if(~idx){
                this.socialMedia.splice(idx, 1, link);
            }
        }

        this.cancelLinkClick();
    }

    deleteLinkClick(link: ISocialMediaLink): void{
        const idx = this.socialMedia.indexOf(link);

        if(~idx){
            this.socialMedia.splice(idx, 1);
        }
    }

    cancelLinkClick(): void{
        this.isAddLink = this.isEditLink = false;

        this.resetLinkForm();
    }

    resetLinkForm(): void{
        this.linkUrl      = '';
        this.linkType     = '';
        this.selectedLink = null;
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
        this.phoneNumber   = phone.number;
        this.phoneType     = phone.type;

        this.isAddPhone  = false;
        this.isEditPhone = true;
    }

    savePhoneClick(): void{
        const phone: IPhoneNumber = {
            number: this.phoneNumber,
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
        this.phoneNumber   = '';
        this.phoneType     = '';
        this.selectedPhone = null;
    }


    /*
        ===============
        ADDRESS METHODS
        ===============
    */
    addAddressClick(): void{
        this.resetAddressForm();

        this.isEditAddress = false;
        this.isAddAddress  = true;
    }

    editAddressClick(address: IAddress): void{
        this.resetAddressForm();

        this.selectedAddress = address;
        this.alias           = address.alias;
        this.street1         = address.street1;
        this.street2         = address.street2;
        this.city            = address.city;
        this.state           = address.state;
        this.zip             = address.zip;
        
        this.isAddAddress  = false;
        this.isEditAddress = true;
    }

    saveAddressClick(): void{
        const address: IAddress = {
            alias:   this.alias,
            street1: this.street1,
            street2: this.street2,
            city:    this.city,
            state:   this.state,
            zip:     this.zip
        }

        if(this.isAddAddress){
            this.addresses.push(address);
        }
        else{
            const idx = this.addresses.indexOf(this.selectedAddress as IAddress);

            if(~idx){
                this.addresses.splice(idx, 1, address);
            }
        }

        this.cancelAddressClick();
    }

    deleteAddressClick(address: IAddress): void{
        const idx = this.addresses.indexOf(address);

        if(~idx){
            this.addresses.splice(idx, 1);
        }
    }

    cancelAddressClick(): void{
        this.resetAddressForm();

        this.isAddAddress = this.isEditAddress = false;
    }

    resetAddressForm(): void{
        this.alias           = '';
        this.street1         = '';
        this.street2         = '';
        this.city            = '';
        this.state           = '';
        this.zip             = '';
        this.selectedAddress = null;
    }


    /*
        ===============
        PRIVATE METHODS
        ===============
    */
    private _initForm(): void{
        if(!this.company) return;

        this.name        = this.company.name
        this.website     = this.company.website
        this.createdOn   = this.company.created
        this.modified    = this.company.modified
        this.modifiedBy  = this.company.modifiedBy
        this.contacts    = this.company.contacts
        this.addresses   = this.company.addresses
        this.phones      = this.company.phones
        this.socialMedia = this.company.socialMedia
    }

    private _clearForm(): void{
        this.name        = '';
        this.website     = '';
        this.createdOn   = '';
        this.modified    = '';
        this.modifiedBy  = '';
        this.contacts    = [];
        this.addresses   = [];
        this.phones      = [];
        this.socialMedia = [];

        this.isAddLink  = this.isEditLink  = false;
        this.isAddPhone = this.isEditPhone = false;
    }
}
</script>

<style scoped lang="sass">

.btn-sm
    padding: .1rem .2rem
    .btn-icon
        max-width: 16px

        &.delete
            position: relative
            top: -1px

</style>