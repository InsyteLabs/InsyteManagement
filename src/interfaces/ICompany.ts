'use strict';

import { IContact } from './IContact';
import { IAddress } from './IAddress';

export interface ICompany{
    id?:        number;
    name:       string;

    website:    string;

    created:    string;
    modified:   string;
    modifiedBy: string;

    contacts:   IContact[];
    addresses:  IAddress[];
}