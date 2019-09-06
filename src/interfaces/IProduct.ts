'use strict';

export interface IProduct{
    [key: string]: any;
    id?:           number;
    name:          string;
    rate:          number;
    qualifier:     string;
    description:   string;
}