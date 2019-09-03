'use strict';

import { ICompany } from './ICompany';

export interface IProject{
    id?:       number;
    companyId: number;
    company:   ICompany;
    name:      string;
    priority:  number;
    startDate: string;
    endDate:   string;
    hours:     number;
    complete:  boolean;
}