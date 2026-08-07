import type { Award, Interest, Language } from './types';

export const languages: Language[] = [
    { type: 'English', level: 'B2 – TOEIC 905/990' },
    { type: 'French', level: 'C1' }, 
];

export const awards: Award[] = [
    { title: 'IEEEXtreme 2020', description: '7th in Tunisia, 240th worldwide out of 7,500 participants' },
    { title: 'ACPC 2020', description: '4th in the Maghreb, 58th in Africa/MENA' },
    { title: 'Microsoft Azure Data Fundamentals', description: 'Certification' },
    { title: 'EX-MACHINA Trophy', description: 'Interdisciplinary cybersecurity crisis simulation competition with industry partners.' },
];

export const interests: Interest[] = [
    { title: 'Entrepreneurship' },
    { title: 'Music (Arab Music Diploma)' },
    { title: 'Sports (BodyBuilding, Tennis and Hiking)' },
];
