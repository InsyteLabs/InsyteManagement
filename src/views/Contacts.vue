<template>
    <div class="container-fluid">
        <ContactList
            :contacts="contacts">
        </ContactList>
    </div>
</template>

<script lang="ts">
'use strict';

import { Vue, Component } from 'vue-property-decorator';

import { entityService } from '@/services';
import { IContact }      from '@/interfaces';

import ContactList from '@/components/ContactList.vue';

@Component({
    components: {
        ContactList
    }
})
export default class Contacts extends Vue {

    private entityService = entityService;

    contacts: IContact[] = [];

    created(){
        this.entityService.getContacts()
            .then((contacts: IContact[]) => {
                this.contacts = contacts;
            })
    }
}
</script>

<style scoped lang="sass">

</style>