import type { ProfessionalExperience } from './types';

export const venturesList: ProfessionalExperience[] = [
    {
        fromYear: '2026',
        toYear: 'Present',
        title: 'LinqOR',
        enterprise: 'Entrepreneurship',
        icon: 'freelance.svg',
        team: 'May 2026 – Present',
        tasks: [
            'Built a Chrome extension that automatically enriches LinkedIn contacts and syncs them with Attio CRM, streamlining prospecting workflows and reducing manual data entry',
            'Adopted by 12 professionals across multiple organizations for daily lead management',
            'Developed backend services in Go and integrated GraphQL APIs',
            'Automated contact enrichment and CRM synchronization workflows',
            'Built browser automation pipelines using Selenium',
            'Designed cloud infrastructure with Firebase and AWS',
            'Leveraged Claude AI to enrich prospect profiles and improve data quality',
        ],
        keyWords: ['GoLang', 'JavaScript', 'GraphQL', 'Selenium', 'Firebase', 'GitHub', 'Claude AI'],
    },
    {
        fromYear: '2024',
        toYear: '2024',
        title: 'FitNow',
        enterprise: 'Entrepreneurship',
        icon: 'freelance.svg',
        team: 'Jan. 2024',
        tasks: [
            'Developed the backend of a platform enabling access to gyms through a universal token system',
        ],
        keyWords: ['GoLang', 'Selenium', 'Firebase'],
    },
];
