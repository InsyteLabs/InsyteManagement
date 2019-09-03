'use strict';

import { IVueFilter } from '@/interfaces';

export const filters: IVueFilter[] = [
    {
        name: 'shortDate',
        method: function shortDateFilter(date: string): string{
            const d = new Date(date);

            if(d.toString() === 'Invalid Date') return '';

            const year  = (d.getFullYear()).toString(),
                  month = (d.getMonth() + 1).toString(),
                  day   = (d.getDate()).toString();

            return `${ month.padStart(2, '0') }/${ day.padStart(2, '0') }/${ year }`;
        }
    },
    {
        name: 'truncate',
        method: function truncateFilter(str: string, len: number): string{
            if(!str || str.length <= len) return str;

            return str.slice(0, len) + '...';
        }
    },
    {
        name: 'currency',
        method: function currencyFilter(val: string|number): string{
            if(isNaN(parseFloat(`${val}`))) return '$0.00';

            return `$${ parseFloat(`${val}`).toFixed(2) }`;
        }
    }
]