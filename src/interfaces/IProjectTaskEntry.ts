'use strict';

export interface IProjectTaskEntry{
    id?:     number;
    title:   string;
    start:   string;
    end:     string;
    hours:   number;
    comment: string;
}