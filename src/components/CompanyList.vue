<template>
    <div class="card">
        <table class="table table-striped">
            <thead>
                <tr class="no-wrap">
                    <th>ID</th>
                    <th>Name</th>
                    <th>Website</th>
                    <th>Created</th>
                    <th>Modified</th>
                    <th>Modifed By</th>
                    <th>Contacts</th>
                    <th>Addresses</th>
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
                    <td>{{ company.contacts }}</td>
                    <td>{{ company.addresses }}</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
'use strict';

import { Vue, Component, Prop } from 'vue-property-decorator';

import { ICompany } from '../interfaces';

@Component
export default class CompanyList extends Vue{
    @Prop() companies!: ICompany[];
}
</script>

<style scoped lang="sass">

@import '@/style/variables'

a, a:visited, a:active, a:hover
    color: $purple
</style>