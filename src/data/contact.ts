import { siteConfig } from './site';

export interface ContactLink {
    label: string;
    uri: string;
    icon: string;
    value: string;
}

export const contactData = {
    heading: 'Contact Me',
    rightsLabel: 'All rights reserved.',
    links: [
        {
            label: 'Email',
            uri: 'mailto:jouini.seyf.js@gmail.com',
            icon: '✉',
            value: 'jouini.seyf.js@gmail.com',
        },
        {
            label: 'Phone',
            uri: 'tel:+33698631468',
            icon: '☎',
            value: '+33 6 98 63 14 68',
        },
        {
            label: 'LinkedIn',
            uri: 'https://www.linkedin.com/in/seyfeddine-jouini-6191b6197/',
            icon: 'in',
            value: siteConfig.fullName,
        },
        {
            label: 'GitHub',
            uri: 'https://github.com/SeyfeddineJouini',
            icon: '{}',
            value: 'seyfeddine-jouini',
        },
    ] satisfies ContactLink[],
};
