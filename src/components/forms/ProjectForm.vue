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
        <div class="row mb-4">
            <div class="col-12">
                <h5>Tasks</h5>
                <table class="table table-striped table-sm mb-1">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Hours</th>
                            <th>Manage</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="task of tasks" :key="task.id">
                            <td>{{ task.title }}</td>
                            <td>{{ task.description }}</td>
                            <td>{{ task.hours }}</td>
                            <td class="no-wrap">
                                <button @click="editTask(task)" class="btn btn-sm btn-primary mr-1">
                                    <svg class="btn-icon pencil" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M493.255 56.236l-37.49-37.49c-24.993-24.993-65.515-24.994-90.51 0L12.838 371.162.151 485.346c-1.698 15.286 11.22 28.203 26.504 26.504l114.184-12.687 352.417-352.417c24.992-24.994 24.992-65.517-.001-90.51zm-95.196 140.45L174 420.745V386h-48v-48H91.255l224.059-224.059 82.745 82.745zM126.147 468.598l-58.995 6.555-30.305-30.305 6.555-58.995L63.255 366H98v48h48v34.745l-19.853 19.853zm344.48-344.48l-49.941 49.941-82.745-82.745 49.941-49.941c12.505-12.505 32.748-12.507 45.255 0l37.49 37.49c12.506 12.506 12.507 32.747 0 45.255z"></path>
                                    </svg>
                                </button>
                                <button @click="deleteTask(task)" class="btn btn-sm btn-danger">
                                    <svg class="btn-icon delete" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M296 432h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zm-160 0h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zM440 64H336l-33.6-44.8A48 48 0 0 0 264 0h-80a48 48 0 0 0-38.4 19.2L112 64H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h24v368a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V96h24a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8zM171.2 38.4A16.1 16.1 0 0 1 184 32h80a16.1 16.1 0 0 1 12.8 6.4L296 64H152zM384 464a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V96h320zm-168-32h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8z"></path>
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button @click="addTask()" class="btn btn-sm btn-primary">+ Task</button>
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

import { IProject, ICompany, IProjectTask } from '../../interfaces';

@Component
export default class ProjectForm extends Vue{

    @Prop() newProject!: boolean;
    @Prop() project!:    IProject;
    @Prop() companies!:  ICompany[];

    companyId: string         = '';
    name:      string         = '';
    priority:  string         = '';
    startDate: string         = '';
    endDate:   string         = '';
    hours:     string         = '';
    complete:  boolean        = false;
    company:   ICompany|null  = null;
    tasks:     IProjectTask[] = [];;

    saveProject(): void{
        const project: IProject = {
            name:       this.name,
            companyId: +this.companyId,
            company:    this.companies.filter(c => c.id === +this.companyId)[0],
            priority:  +this.priority,
            startDate:  this.startDate,
            endDate:    this.endDate,
            hours:     +this.hours,
            complete:   this.complete,
            tasks:      this.tasks
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

    @Emit('editTask')
    editTask(task: IProjectTask): void{ }

    @Emit('deleteTask')
    deleteTask(task: IProjectTask): void{ }

    @Emit('addTask')
    addTask(): void{ }


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
        this.tasks     = this.project.tasks;
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
        this.tasks     = [];
    }
}
</script>

<style lang="sass">

</style>