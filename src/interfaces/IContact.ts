'use strict';

export interface IContact{
    [key:string]: any;
    id?:          number;
    firstName:    string;
    lastName:     string;
    email:        string;
    mobile:       string;
    work:         string;
    fax:          string;
}