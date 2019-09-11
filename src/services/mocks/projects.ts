'use strict';

import { IProject, ICompany } from '@/interfaces';

import { COMPANIES as companies } from './companies';

export const PROJECTS: IProject[] = [
    {
        id:        1,
        companyId: 1,
        company:   getCompany(1),
        name:      'Project Management App',
        priority:  0,
        startDate: '09/02/2019 04:00:00',
        endDate:   '',
        hours:     0,
        complete:  false,
        tasks: [
            {
                id: 1,
                title: 'User interface',
                description: 'Build out application interface, collapsable navigation, list item rendering, forms and modals',
                hours: 0,
                entries: []
            }
        ]
    },
    {
        id:        2,
        companyId: 2,
        company:   getCompany(2),
        name:      'Dashboard',
        priority:  1,
        startDate: '02/19/2019 10:00:00',
        endDate:   '',
        hours:     36.75,
        complete:  false,
        tasks: []
    },
    {
        id:        3,
        companyId: 3,
        company:   getCompany(3),
        name:      'Domain Migration',
        priority:  3,
        startDate: '02/10/2019 08:45:53',
        endDate:   '03/12/2019 21:38:39',
        hours:     16.75,
        complete:  true,
        tasks: []
    },
    {
        id:        4,
        companyId: 3,
        company:   getCompany(3),
        name:      'Payment Reconciliation',
        priority:  2,
        startDate: '05/02/2019',
        endDate:   '06/20/2019',
        hours:     42.5,
        complete:  true,
        tasks: []
    },
    {
        id:        5,
        companyId: 4,
        company:   getCompany(4),
        name:      'Billing Application',
        priority:  4,
        startDate: '08/19/2017',
        endDate:   '12/22/2017',
        hours:     128.75,
        complete:  true,
        tasks: []
    },
    {
        id:        6,
        companyId: 5,
        company:   getCompany(5),
        name:      'Coffee Ordering Application',
        priority:  2,
        startDate: '10/20/2018',
        endDate:   '12/17/2018',
        hours:     87,
        complete:  true,
        tasks: []
    },
    {
        id:        7,
        companyId: 6,
        company:   getCompany(6),
        name:      'Inventory Management System',
        priority:  2,
        startDate: '03/20/2018',
        endDate:   '07/29/2018',
        hours:     245.25,
        complete:  true,
        tasks: []
    },
    {
        id:        8,
        companyId: 7,
        company:   getCompany(7),
        name:      'Plant Cataloguing App',
        priority:  1,
        startDate: '07/07/2019',
        endDate:   '',
        hours:     176.5,
        complete:  false,
        tasks: []
    }
];

function getCompany(id: number): ICompany{
    return companies.filter(c => c.id === id)[0];
}