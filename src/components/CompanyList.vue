<template>
    <table class="table table-striped">
        <thead>
            <tr class="no-wrap">
                <th>ID</th>
                <th>Name</th>
                <th>Website</th>
                <th>Created</th>
                <th>Modified</th>
                <th>Modifed By</th>
                <th>Manage</th>
            </tr>
        </thead>
        <tbody v-if="companies && companies.length">
            <tr v-for="company of companies" :key="company.id" class="no-wrap">
                <td>{{ company.id }}</td>
                <td>{{ company.name }}</td>
                <td>
                    <a :href="company.website" target="_blank" rel="noopener nofollow external">
                        {{ company.website | truncate(50) }}
                    </a>
                </td>
                <td>{{ company.created | shortDate }}</td>
                <td>{{ company.modified | shortDate }}</td>
                <td>{{ company.modifiedBy }}</td>
                <td>
                    <button @click="editCompany(company)" class="btn btn-sm btn-primary">
                        <svg class="btn-icon pencil" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M493.255 56.236l-37.49-37.49c-24.993-24.993-65.515-24.994-90.51 0L12.838 371.162.151 485.346c-1.698 15.286 11.22 28.203 26.504 26.504l114.184-12.687 352.417-352.417c24.992-24.994 24.992-65.517-.001-90.51zm-95.196 140.45L174 420.745V386h-48v-48H91.255l224.059-224.059 82.745 82.745zM126.147 468.598l-58.995 6.555-30.305-30.305 6.555-58.995L63.255 366H98v48h48v34.745l-19.853 19.853zm344.48-344.48l-49.941 49.941-82.745-82.745 49.941-49.941c12.505-12.505 32.748-12.507 45.255 0l37.49 37.49c12.506 12.506 12.507 32.747 0 45.255z"></path>
                        </svg>
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
'use strict';

import { Vue, Component, Prop, Emit } from 'vue-property-decorator';

import { ICompany } from '../interfaces';

@Component
export default class CompanyList extends Vue{
    @Prop() companies!: ICompany[];

    @Emit('editCompany')
    editCompany(company: ICompany): void{ }
}
</script>

<style scoped lang="sass">

@import '@/style/variables'

</style>