<template>
    <div id="project-form" class="container-fluid">
        <h3>
            {{
                newProject
                    ? 'Create Project'
                    : 'Edit Project'
            }}
        </h3>
        <div class="row">
            <!-- PROJECT NAME -->
            <div class="col-12">
                <div class="form-group">
                    <label for="name">Project Name</label>
                    <div class="input-group">
                        <input v-model="name" type="text" id="name" class="form-control">
                    </div>
                </div>
            </div>
            <!-- COMPANY -->
            <div class="col-md-6">
                <div class="form-group">
                    <label for="company">Company</label>
                    <div class="input-group">
                        <select v-model="companyId" id="company" class="form-control">
                            <option value="">Please Select</option>
                            <option v-for="company of companies" :key="company.id" :value="company.id">
                                {{ company.name }}
                            </option>
                        </select>
                    </div>
                </div>
            </div>
            <!-- PRIORITY -->
            <div class="col-md-3 col-sm-6">
                <div class="form-group">
                    <label for="priority">Priority</label>
                    <div class="input-group">
                        <select v-model="priority" id="priority" class="form-control">
                            <option value="">Please Select</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>
            </div>
            <!-- HOURS -->
            <div class="col-md-3 col-sm-6">
                <div class="form-group">
                    <label for="hours">Hours</label>
                    <div class="input-group">
                        <input v-model="hours" type="text" id="hours" class="form-control" disabled="disabled">
                    </div>
                </div>
            </div>
            <!-- START DATE -->
            <div class="col-md-6">
                <div class="form-group">
                    <label for="start-date">Start Date</label>
                    <div class="input-group">
                        <input v-model="startDate" type="text" id="start-date" class="form-control">
                    </div>
                </div>
            </div>
            <!-- END DATE -->
            <div class="col-md-6">
                <div class="form-group">
                    <label for="end-date">End Date</label>
                    <div class="input-group">
                        <input v-model="endDate" type="text" id="end-date" class="form-control">
                    </div>
                </div>
            </div>
            <!-- COMPLETE -->
            <div class="col-12">
                <div class="form-group">
                    <label>
                        <input v-model="complete" type="checkbox"> Complete
                    </label>
                </div>
            </div>
        </div>
        <button @click="saveProject" class="btn btn-success">
            {{
                newProject
                    ? 'Create Project'
                    : 'Update Project'
            }}
        </button>
    </div>
</template>

<script lang="ts">
'use strict';

import { Vue, Component, Prop, Emit, Watch } from 'vue-property-decorator';

import { IProject, ICompany } from '../../interfaces';

@Component
export default class ProjectForm extends Vue{

    @Prop() newProject!: boolean;
    @Prop() project!:    IProject;
    @Prop() companies!:  ICompany[];

    companyId: string  = '';
    name:      string  = '';
    priority:  string  = '';
    startDate: string  = '';
    endDate:   string  = '';
    hours:     string  = '';
    complete:  boolean = false;
    company:   ICompany|null = null;

    saveProject(): void{
        const project: IProject = {
            name:       this.name,
            companyId: +this.companyId,
            company:    this.companies.filter(c => c.id === +this.companyId)[0],
            priority:  +this.priority,
            startDate:  this.startDate,
            endDate:    this.endDate,
            hours:     +this.hours,
            complete:   this.complete
        }

        if(this.newProject){
            this.createProject(project);
        }
        else{
            project.id = this.project.id;
            this.updateProject(project);
        }
    }

    /*
        ========
        WATCHERS
        ========
    */
    @Watch('project')
    projectWatcher(project: IProject): void{
        project ? this._initForm() : this._clearForm();
    }

    /*
        ==============
        EVENT EMITTERS
        ==============
    */
    @Emit('createProject')
    createProject(project: IProject): void{ }

    @Emit('updateProject')
    updateProject(project: IProject): void{ }


    /*
        ===============
        PRIVATE METHODS
        ===============
    */
    private _initForm(): void{
        if(!this.project) return;

        this.companyId = `${ this.project.companyId }`;
        this.company   = this.project.company;
        this.name      = this.project.name;
        this.priority  = `${ this.project.priority }`;
        this.startDate = this.project.startDate;
        this.endDate   = this.project.endDate;
        this.hours     = `${ this.project.hours }`;
        this.complete  = this.project.complete;
    }

    private _clearForm(): void{
        this.name      = '';
        this.companyId = '';
        this.company   = null;
        this.priority  = '';
        this.startDate = '';
        this.endDate   = '';
        this.hours     = '';
        this.complete  = false;
    }
}
</script>

<style lang="sass">

</style>