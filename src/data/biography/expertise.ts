import type { AreaOfExpertise } from './types';

export const expertiseList: AreaOfExpertise[] = [
    {
        title: 'Backend',
        technologies: [
            { label: 'Java', level: 85, icon: 'logos:java' },
            { label: 'C++', level: 80, icon: 'logos:c-plusplus' },
            { label: 'Python', level: 70, icon: 'logos:python' },
            { label: 'GoLang', level: 80, icon: 'logos:go' },
            { label: 'Node.js', level: 80, icon: 'logos:nodejs-icon' },
            { label: 'Spring Boot', level: 80, icon: 'logos:spring-icon' },
            { label: '.NET Core', level: 70, icon: 'logos:dotnet' },
            { label: 'SQL', level: 85, icon: 'mdi:database' },
            { label: 'NoSQL', level: 70, icon: 'mdi:database-outline' },
            { label: 'Kafka', level: 40, icon: 'logos:kafka' },
        ],
    },
    {
        title: 'Frontend',
        technologies: [
            { label: 'JavaScript', level: 90, icon: 'logos:javascript' },
            { label: 'TypeScript', level: 85, icon: 'logos:typescript-icon' },
            { label: 'React', level: 85, icon: 'logos:react' },
            { label: 'Angular', level: 85, icon: 'logos:angular-icon' },
            { label: 'Astro', level: 60, icon: 'logos:astro' },
            { label: 'Flutter', level: 50, icon: 'logos:flutter' },
        ],
    },
    {
        title: 'Databases',
        technologies: [
            { label: 'PostgreSQL', level: 80, icon: 'logos:postgresql' },
            { label: 'SQL', level: 80, icon: 'logos:mysql' },
            { label: 'MongoDB', level: 75, icon: 'logos:mongodb-icon' },
            { label: 'Cassandra', level: 65, icon: 'logos:cassandra' },
        ],
    },
    {
        title: 'DevOps & Cloud',
        technologies: [
            { label: 'GitLab CI/CD', level: 75, icon: 'logos:gitlab' },
            { label: 'Microsoft Azure', level: 70, icon: 'logos:microsoft-azure' },
            { label: 'AWS', level: 65, icon: 'logos:aws' },
            { label: 'Docker', level: 70, icon: 'logos:docker-icon' },
            { label: 'Jenkins', level: 50, icon: 'logos:jenkins' },
            { label: 'CI/CD', level: 50, icon: 'mdi:pipe' },
            { label: 'Kubernetes', level: 20, icon: 'logos:kubernetes' },
        ],
    },
    {
        title: 'AI Agents',
        technologies: [
            { label: 'GitHub Copilot', level: 90, icon: 'logos:github-copilot' },
            { label: 'Claude AI', level: 85, icon: 'logos:claude' },
            { label: 'Lovable', level: 75, icon: 'mdi:heart' },
        ],
    },
    {
        title: 'Computer Science',
        technologies: [
            { label: 'Algorithms', level: 90, icon: 'mdi:graph-outline' },
            { label: 'Data Structures', level: 90, icon: 'mdi:file-tree' },
            { label: 'Complexity Analysis', level: 80, icon: 'mdi:chart-bell-curve' },
        ],
    },
    {
        title: 'Management',
        technologies: [
            { label: 'Coaching & Mentoring', level: 80, icon: 'mdi:account-group' },
            { label: 'Leadership', level: 60, icon: 'mdi:star-outline' },
            { label: 'Agile Methodologies', level: 70, icon: 'mdi:refresh' },
        ],
    },
];
