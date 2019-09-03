<template>
    <div class="container-fluid">
        <ProjectList
            :projects="projects">
        </ProjectList>
    </div>
</template>

<script lang="ts">
'use strict';

import { Vue, Component } from 'vue-property-decorator';

import { entityService } from '@/services';
import { IProject }      from '@/interfaces';
import ProjectList       from '@/components/ProjectList.vue';

@Component({
    components: {
        ProjectList
    }
})
export default class Projects extends Vue {
    private entityService = entityService;

    projects: IProject[] = [];

    created(): void{
        this.entityService.getProjects()
            .then((projects: IProject[]) => {
                this.projects = projects;
            });
    }
}
</script>

<style lang="sass">

</style>