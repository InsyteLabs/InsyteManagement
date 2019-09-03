<template>
    <div class="card">
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
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
'use strict';

import { Vue, Component, Prop } from 'vue-property-decorator';

import { IProject } from '../interfaces';

@Component
export default class ProjectList extends Vue{
    @Prop() projects!: IProject[];
}
</script>

<style lang="sass">

</style>