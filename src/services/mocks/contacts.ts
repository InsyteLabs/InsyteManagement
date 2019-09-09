'use strict';

import { IContact } from '@/interfaces';
import { EmailAddressType, PhoneNumberType } from '@/constants';

export const CONTACTS: IContact[] = [
    {
        id:        1,
        firstName: 'Bryce',
        lastName:  'Jech',
        title:     'Web Developer',
        emails: [
            {
                address: 'bryce.jech@gmail.com',
                type:    EmailAddressType.PERSONAL,
                primary: true
            },
            {
                address: 'bryce@brycejech.com',
                type:    EmailAddressType.PERSONAL,
                primary: false
            }
        ],
        phones: [
            {
                number: '405-714-0820',
                type:   PhoneNumberType.MOBILE
            }
        ]
    },
    {
        id:        2,
        firstName: 'Laryn',
        lastName:  'Jech',
        title:     'RN',
        emails: [
            {
                address: 'laryn_burns@yahoo.com',
                type:    EmailAddressType.PERSONAL,
                primary: true
            }
        ],
        phones: [
            {
                number: '405-612-6495',
                type:   PhoneNumberType.MOBILE
            }
        ]
    },
    {
        id:        3,
        firstName: 'Wylie',
        lastName:  'Bierig',
        title:     'Student',
        emails: [
            {
                address: 'bierig.wylie@gmail.com',
                type:    EmailAddressType.PERSONAL,
                primary: true
            }
        ],
        phones: []
    },
    {
        id:        4,
        firstName: 'Kyndal',
        lastName:  'Bierig',
        title:     'Student',
        emails: [
            {
                address: 'bierig.kyndal@gmail.com',
                type:    EmailAddressType.PERSONAL,
                primary: true
            }
        ],
        phones: []
    },
    {
        id:        5,
        firstName: 'Larry',
        lastName:  'Burns',
        title:     'Therapist',
        emails: [
            {
                address: 'larrywburnsphd@yahoo.com',
                type:    EmailAddressType.WORK,
                primary: true
            }
        ],
        phones: [
            {
                number: '405-612-6495',
                type:   PhoneNumberType.MOBILE
            },
            {
                number: '405-372-1988',
                type:   PhoneNumberType.WORK
            }
        ]
    },
    {
        id:        6,
        firstName: 'Donna',
        lastName:  'Burns',
        title:     'Retired',
        emails: [
            {
                address: 'd.chuck.burns@yahoo.com',
                type:    EmailAddressType.PERSONAL,
                primary: true
            }
        ],
        phones: [
            {
                number: '405-742-4447',
                type:   PhoneNumberType.MOBILE
            }
        ]
    }
];