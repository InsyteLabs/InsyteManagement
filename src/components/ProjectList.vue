<template>
    <table class="table table-striped">
        <thead>
            <tr class="no-wrap">
                <th>ID</th>
                <th>Company</th>
                <th>Project Name</th>
                <th>Priority</th>
                <th>Hours</th>
                <th>Start</th>
                <th>End</th>
                <th>Complete</th>
                <th>Manage</th>
            </tr>
        </thead>
        <tbody v-if="projects && projects.length">
            <tr v-for="project of projects" :key="project.id">
                <td>{{ project.id }}</td>
                <td>
                    {{
                        project.company
                            ? project.company.name
                            : ''
                    }}
                </td>
                <td>{{ project.name }}</td>
                <td>{{ project.priority }}</td>
                <td>{{ project.hours }}</td>
                <td>{{ project.startDate | shortDate }}</td>
                <td>{{ project.endDate | shortDate }}</td>
                <td>{{ project.complete }}</td>
                <td>
                    <button @click="editProject(project)" class="btn btn-sm btn-primary">
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

import { IProject } from '../interfaces';

@Component
export default class ProjectList extends Vue{
    @Prop() projects!: IProject[];

    @Emit('editProject')
    editProject(project: IProject): void{ }
}
</script>

<style lang="sass">

</style>