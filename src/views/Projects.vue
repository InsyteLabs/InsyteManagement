<template>
    <div class="container-fluid">
        <ModalWindow @modalActiveStateChange="onModalActiveStateChange($event)" ref="modalWindow">
            <ProjectForm
                :project="selectedProject"
                :newProject="newProject"
                :companies="companies"

                @createProject="onCreateProject($event)"
                @updateProject="onUpdateProject($event)">
            </ProjectForm>
        </ModalWindow>


        <div class="card pt-3">
            <div class="row px-4">
                <div class="col-md-8">
                    <h1 class="mt-5 mb-3">Projects</h1>
                </div>
                <div class="col-md-4 text-right">
                    <button @click="onNewProjectClick" class="btn bg-primary mb-2">
                        <span class="text-large">&plus;</span> Project
                    </button>
                    <input v-model="filter" type="text" class="form-control mb-3" placeholder="Filter Projects">
                </div>
            </div>
            <ProjectList
                ref='projectList'
                :projects="projects"
                @editProject="onEditProjectClick($event)">
            </ProjectList>
        </div>
    </div>
</template>

<script lang="ts">
'use strict';

import { Vue, Component, Ref, Watch } from 'vue-property-decorator';

import { entityService } from '@/services';
import { IProject, ICompany }      from '@/interfaces';

import ModalWindow from '@/components/ModalWindow.vue';
import ProjectList from '@/components/ProjectList.vue';
import ProjectForm from '@/components/forms/ProjectForm.vue';

@Component({
    components: {
        ModalWindow,
        ProjectList,
        ProjectForm
    }
})
export default class Projects extends Vue {
    @Ref('modalWindow') modalWindow!: ModalWindow;
    @Ref('projectList') projectList!: ProjectList;

    private entityService = entityService;

    filter: string = '';

    _projects:       IProject[]      = [];
    projects:        IProject[]      = [];
    companies:       ICompany[]      = [];
    selectedProject: IProject | null = null;
    newProject:      boolean         = true;
    
    /*
        =====
        HOOKS
        =====
    */
    created(): void{
        this._loadProjects();
        this._loadCompanies();
    }


    /*
        ==============
        EVENT HANDLERS
        ==============
    */
    onNewProjectClick(): void{
        this.selectedProject = null;
        this.newProject      = true;

        this.modalWindow.openModal();
    }

    onEditProjectClick(project: IProject): void{
        this.selectedProject = project;
        this.newProject      = false;

        this.modalWindow.openModal();
    }

    onCreateProject(project: IProject): void{
        this.entityService.createProject(project)
            .then((newProject: IProject) => {
                this._loadProjects();

                // this.projectList.$forceUpdate();

                this.modalWindow.closeModal();
                this.selectedProject = null;
                this.newProject      = true;
            });
    }

    onUpdateProject(project: IProject): void{
        this.entityService.updateProject(project)
            .then((updatedProject: IProject) => {
                this._loadProjects();

                // this.projectList.$forceUpdate();

                this.modalWindow.closeModal();
                this.selectedProject = null;
                this.newProject      = true;
            });
    }

    onModalActiveStateChange(active: boolean): void{
        if(!active){
            this.selectedProject = null;
            this.newProject      = true;
        }
    }


    /*
        ========
        WATCHERS
        ========
    */
    @Watch('filter')
    filterWatcher(val: string){
        if(!val) return this.projects = this._projects;
        if(!this._projects) return;

        const exp = new RegExp(this.filter, 'i');
        this.projects = this._projects.filter(p => {
            for(const prop in p){
                if(exp.test(String(p[prop]))) return true;
            }

            if(p.company && exp.test(p.company.name)) return true;
            
            return false;
        });
    }


    /*
        ===============
        PRIVATE METHODS
        ===============
    */
    private _loadProjects(): void{
        this.entityService.getProjects()
            .then((projects: IProject[]) => {
                this._projects = this.projects = projects;
            });
    }

    private _loadCompanies(): void{
        this.entityService.getCompanies()
            .then((companies: ICompany[]) => {
                this.companies = companies;
            });
    }
}
</script>

<style lang="sass">

</style>