'use strict';

import { IContact }         from './IContact';
import { IAddress }         from './IAddress';
import { IPhoneNumber }     from './IPhoneNumber';
import { ISocialMediaLink } from './ISocialMediaLink';

export interface ICompany{
    [key: string]: any;
    
    id?:        number;
    name:       string;

    website:    string;

    created:    string;
    modified:   string;
    modifiedBy: string;

    contacts:    IContact[];
    addresses:   IAddress[];
    phones:      IPhoneNumber[];
    socialMedia: ISocialMediaLink[];
}