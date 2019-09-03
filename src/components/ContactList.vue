<template>
    <div class="card">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Work</th>
                    <th>Fax</th>
                    <th>Manage</th>
                </tr>
            </thead>
            <tbody v-if="contacts && contacts.length">
                <tr v-for="contact of contacts" :key="contact.id">
                    <td>{{ contact.id }}</td>
                    <td>{{ contact.firstName }} {{ contact.lastName }}</td>
                    <td>{{ contact.email }}</td>
                    <td>{{ contact.mobile }}</td>
                    <td>{{ contact.work }}</td>
                    <td>{{ contact.fax }}</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
'use strict';

import { Vue, Component, Prop } from 'vue-property-decorator';
import { IContact } from '@/interfaces';

@Component
export default class ContactList extends Vue{
    @Prop() contacts!: IContact;
}
</script>

<style scoped lang="sass">

</style>