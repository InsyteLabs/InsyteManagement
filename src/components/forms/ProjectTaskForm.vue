<template>
    <div id="project-task-form" class="container-fluid">
        <h3>
            {{
                newProjectTask
                    ? 'Add Project Task'
                    : 'Edit Project Task'
            }}
        </h3>
        <div class="row mb-4">
            <div class="col-12">
                <div class="form-group">
                    <label for="title">Task Title</label>
                    <div class="input-group">
                        <input v-model="title" type="text" id="title" class="form-control">
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="form-group">
                    <label for="description">Description</label>
                    <div class="input-group">
                        <textarea v-model="description" id="description" rows="3" class="form-control"></textarea>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <h5>Entries</h5>
                <table class="table table-striped table-sm mb-1">
                    <thead>
                        <tr>
                            <th>Start</th>
                            <th>End</th>
                            <th>Hours</th>
                            <th>Comment</th>
                            <th>Manage</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="entry of entries" :key="entry.id">
                            <td>{{ entry.start }}</td>
                            <td>{{ entry.end }}</td>
                            <td>{{ entry.hours }}</td>
                            <td>{{ entry.comment }}</td>
                            <td>

                            </td>
                        </tr>
                    </tbody>
                </table>
                <button v-if="!(isAddEntry || isEditEntry)" @click="addEntryClick()" class="btn btn-primary btn-sm">+ Entry</button>
            </div>
            <div v-if="isAddEntry || isEditEntry" class="col-12">
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="start-date">Start Date</label>
                            <div class="input-group">
                                <input v-model="entryStartDate" type="text" id="start-date" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="start-time">Start Time</label>
                            <div class="input-group">
                                <input v-model="entryStartTime" type="text" id="start-time" class="form-control">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="end-date">End Date</label>
                            <div class="input-group">
                                <input v-model="entryEndDate" type="text" id="end-date" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="end-time">End Time</label>
                            <div class="input-group">
                                <input v-model="entryEndTime" type="text" id="end-time" class="form-control">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <label for="comment">Comment</label>
                            <div class="input-group">
                                <textarea v-model="entryComment" id="comment" rows="3" class="form-control"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button @click="saveTask()" class="btn btn-success">
            {{
                newProjectTask
                    ? 'Create Task'
                    : 'Update Task'
            }}
        </button>
    </div>
</template>

<script lang="ts">
'use strict';

import { Vue, Component, Prop, Emit, Watch } from 'vue-property-decorator';
import { IProjectTask, IProjectTaskEntry } from '../../interfaces';

@Component
export default class ProjectTaskForm extends Vue {

    @Prop() newProjectTask!: boolean;
    @Prop() projectTask!:    IProjectTask;

    isAddEntry:    boolean                  = false;
    isEditEntry:   boolean                  = false;
    selectedEntry: IProjectTaskEntry | null = null;

    // Form fields
    title:       string = '';
    description: string = '';
    hours:       string = '';
    entries:     IProjectTaskEntry[] = [];

    // Task entry fields
    entryStartDate: string = '';
    entryStartTime: string = '';
    entryEndDate:   string = '';
    entryEndTime:   string = '';
    entryComment:   string = '';

    saveTask(): void{
        const task: IProjectTask = {
            title:        this.title,
            description:  this.description,
            hours:       +this.hours,
            entries:      this.entries
        }

        if(!this.newProjectTask && this.projectTask){
            task.id = this.projectTask.id;

            this.updateProjectTask(task);
        }
        else{
            this.createProjectTask(task);
        }
    }

    addEntryClick(): void{
        this.isAddEntry = true;
    }


    /*
        ========
        WATCHERS
        ========
    */
    @Watch('projectTask')
    projectTaskWatcher(task: IProjectTask): void{
        task ? this._initForm() : this._clearForm();
    }


    /*
        ==============
        EVENT EMITTERS
        ==============
    */
    @Emit('createProjectTask')
    createProjectTask(task: IProjectTask): void{ }

    @Emit('updateProjectTask')
    updateProjectTask(task: IProjectTask): void{ }


    /*
        ===============
        PRIVATE METHODS
        ===============
    */
    private _initForm(): void{
        if(!this.projectTask) return;

        this.title       = this.projectTask.title;
        this.description = this.projectTask.description;
        this.entries     = this.projectTask.entries;
    }

    private _clearForm(): void{
        this.title       = '';
        this.description = '';
    }
}
</script>

<style scoped lang="sass">

</style>