'use strict';

import { IEmailAddress } from './IEmailAddress';
import { IPhoneNumber } from './IPhoneNumber';

export interface IContact{
    [key: string]: any;

    id?:          number;
    firstName:    string;
    lastName:     string;
    title:        string;

    emails:       IEmailAddress[];
    phones:       IPhoneNumber[];
}