<template>
    <div class="container-fluid">
        <CompanyList
            :companies="companies">
        </CompanyList>
    </div>
</template>

<script lang="ts">
'use strict';

import { Vue, Component } from 'vue-property-decorator';

import { entityService } from '@/services';
import { ICompany }      from '@/interfaces';
import CompanyList       from '@/components/CompanyList.vue';

@Component({
    components: {
        CompanyList
    }
})
export default class Companies extends Vue{
    private entityService = entityService;

    companies: ICompany[] = [];

    created(){
        this.entityService.getCompanies()
            .then((companies: ICompany[]) => {
                this.companies = companies;
            });
    }
}
</script>

<style scoped lang="sass">

</style>