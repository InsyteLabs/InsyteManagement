'use strict'

import { IProduct } from '@/interfaces';

export const PRODUCTS: IProduct[] = [
    {
        id: 1,
        name: 'Hourly Service Rate',
        rate: 75,
        qualifier: 'Hour',
        description: 'Flat rate billed for hourly service'
    },
    {
        id: 2,
        name: 'Monthly Retainer Fee (8 Hour)',
        rate: 500,
        qualifier: 'Month',
        description: '1 month retainer fee up to 8 hours of work per month'
    },
    {
        id: 3,
        name: 'Monthly Retainer Fee (12 Hour)',
        rate: 700,
        qualifier: 'Month',
        description: '1 month retainer fee up to 12 hours of work per month'
    },
    {
        id: 4,
        name: 'Monthly Web Hosting (Simple)',
        rate: 20,
        qualifier: 'Month',
        description: 'Lowest tier of web hosting'
    },
    {
        id: 5,
        name: 'Monthly Web Hosting (Moderate)',
        rate: 35,
        qualifier: 'Month',
        description: 'Mid tier web hosting'
    },
    {
        id: 6,
        name: 'Monthly Web Hosting (Premium)',
        rate: 45,
        qualifier: 'Hour',
        description: 'Highest tier web hosting plan, also includes free monthly website monitoring'
    },
    {
        id: 7,
        name: 'Website Monitoring',
        rate: 25,
        qualifier: 'Month',
        description: 'Monitor website for suspicious/malicious content, content update reports, attack detection and prevention'
    }
];