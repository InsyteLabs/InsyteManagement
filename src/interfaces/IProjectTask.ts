'use strict';

import { IProjectTaskEntry } from './IProjectTaskEntry';

export interface IProjectTask{
    id?:         number;
    title:       string;
    description: string;
    hours:       number;

    entries:     IProjectTaskEntry[];
}