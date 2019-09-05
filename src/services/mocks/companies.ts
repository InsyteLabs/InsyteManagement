'use strict';

import { ICompany } from '../../interfaces';

import {
    PhoneNumberType as PhoneType,
    SocialMediaType as SocialType
} from '../../constants';

export const COMPANIES: ICompany[] = [
    {
        id:          1,
        name:        'Insyte Labs',
        website:     'https://insytelabs.com',
        created:     '12/12/2018 08:00:00',
        modified:    '',
        modifiedBy:  'Bryce Jech',
        contacts:    [],
        addresses: [
            {
                id: 1,
                alias: 'Office Location',
                street1: '412 E Topaz Ave',
                street2: '',
                city: 'Stillwater',
                state: 'OK',
                zip: '74075'
            }
        ],
        phones: [
            {
                number: '405-714-0820',
                type: PhoneType.MOBILE
            }
        ],
        socialMedia: [
            {
                url: 'https://www.linkedin.com/company/insytelabs/',
                type: SocialType.LINKEDIN
            },
            {
                url: 'https://github.com/InsyteLabs',
                type: SocialType.GITHUB
            }
        ]
    },
    {
        id:          2,
        name:        'ProValue.Net',
        website:     'https://provalue.net',
        created:     '08/19/2016 12:24:08',
        modified:    '',
        modifiedBy:  'Bryce Jech',
        contacts:    [],
        addresses: [
            {
                alias: 'Main Office',
                street1: '801 S. Main',
                street2: 'Ste 1',
                city: 'Stillwater',
                state: 'OK',
                zip: '74074'
            }
        ],
        phones: [
            {
                number: '405-624-6000',
                type: PhoneType.OFFICE
            },
            {
                number: '1-800-328-8142',
                type: PhoneType.SUPPORT
            }
        ],
        socialMedia: [
            {
                url: 'https://www.facebook.com/Provalue.net',
                type: SocialType.FACEBOOK
            }
        ]
    },
    {
        id:          3,
        name:        'Lake McMurtry',
        website:     'https://lakemcmurtry.org',
        created:     '05/20/2014 14:47:08',
        modified:    '',
        modifiedBy:  'Bryce Jech',
        contacts:    [],
        addresses: [
            {
                alias: 'Mailing Address',
                street1: 'PO Box 1058',
                street2: '',
                city: 'Stillwater',
                state: 'OK',
                zip: '74076'
            }
        ],
        phones: [
            {
                number: '405-747-8085',
                type: PhoneType.MAIN
            },
            {
                number: '405-714-2394',
                type: PhoneType.AFTERHOURS
            }
        ],
        socialMedia: [
            {
                url: 'https://www.facebook.com/lakemcmurtryfriends/',
                type: SocialType.FACEBOOK
            }
        ]
    },
    {
        id:          4,
        name:        'Stillwater Mental Health Professionals',
        website:     '',
        created:     '07/23/2015 07:59:37',
        modified:    '',
        modifiedBy:  'Bryce Jech',
        contacts:    [],
        addresses:   [],
        phones:      [],
        socialMedia: []
    },
    {
        id:          5,
        name:        'Aspen Coffee',
        website:     'https://www.aspencoffeecompany.com/',
        created:     '06/23/2016 10:04:49',
        modified:    '',
        modifiedBy:  'Bryce Jech',
        contacts:    [],
        addresses:   [
            {
                alias: 'Downtown Stillwater',
                street1: '111 W 7th Ave',
                street2: '',
                city: 'Stillwater',
                state: 'OK',
                zip: '74074'
            }
        ],
        phones:      [
            {
                number: '405-377-5282',
                type: PhoneType.WORK
            }
        ],
        socialMedia: [
            {
                url: 'https://www.facebook.com/aspencoffee',
                type: SocialType.FACEBOOK
            }
        ]
    },
    {
        id:          6,
        name:        'R&R Dispensary',
        website:     'https://weedmaps.com/dispensaries/integrated-creative',
        created:     '07/24/2019',
        modified:    '',
        modifiedBy:  'Bryce Jech',
        contacts:    [],
        addresses:   [],
        phones:      [],
        socialMedia: []
    },
    {
        id:          7,
        name:        'Bustani Plant Farm',
        website:     'https://www.bustaniplantfarm.com/',
        created:     '05/30/2018',
        modified:    '',
        modifiedBy:  'Bryce Jech',
        contacts:    [],
        addresses:   [],
        phones:      [],
        socialMedia: []
    }
]