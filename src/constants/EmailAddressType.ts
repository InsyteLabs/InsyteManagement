'use strict';

interface IEmailAddressType{
    [key: string]: string
}

export const EmailAddressType: IEmailAddressType = {
    PERSONAL: 'Personal',
    WORK:     'Work',
    SUPPORT:  'Support',
    OTHER:    'Other'
}