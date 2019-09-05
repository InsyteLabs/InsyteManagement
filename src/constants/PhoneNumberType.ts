'use strict';

interface IPhoneNumberType{
    [key: string]: any
}

export const PhoneNumberType: IPhoneNumberType = {
    MOBILE:     'Mobile',
    HOME:       'Home',
    WORK:       'Work',
    MAIN:       'Main',
    OFFICE:     'Office',
    SUPPORT:    'Support',
    TOLLFREE:   'Toll Free',
    EMERGENCY:  'Emergency',
    AFTERHOURS: 'After Hours',
    PAGER:      'Pager',
    FAX:        'Fax',
    OTHER:      'Other'
}