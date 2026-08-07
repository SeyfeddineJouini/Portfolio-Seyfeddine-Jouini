import type { ProfessionalExperience } from './types';

export const experienceList: ProfessionalExperience[] = [
    {
        fromYear: '2026',
        toYear: 'Present',
        title: 'Software Engineering – Final-Year Internship',
        enterprise: 'GE HealthCare',
        icon: 'GEHC.png',
        team: 'Paris, France — Mar. 2026 – Sept. 2026',
        tasks: [
            'Designed and developed end-to-end a patented automatic label placement algorithm for MRI viewers',
            'Led the implementation from algorithmic design to functional validation',
            'Implemented real-time collision detection and dynamic label repositioning during zoom, pan, rotation, and image navigation.'
        ],
        keyWords: [
            'Python',
            'Spring Boot',
            'JavaScript',
            'PostgreSQL',
            'GitLab',
            'GitHub Copilot',
        ],
    },
    {
        fromYear: '2024',
        toYear: 'Present',
        title: 'Freelance Software Engineer',
        enterprise: 'Freelance',
        icon: 'freelance.png',
        team: '2024 – Present',
        tasks: [],
        keyWords: [],
        subProjects: [
            {
                title: 'AI Music Generation Module — VittaScience',
                period: 'Oct. 2024 – Apr. 2025',
                tasks: [
                    'Developed an AI module for music generation, text-to-speech (TTS), speech-to-text (STT) and lip synchronization (LipSync) integrated into the VittaScience platform',
                ],
                keyWords: ['Python', 'JavaScript', 'Whisper', 'GitHub'],
            },
            {
                title: 'FoodSpot',
                period: 'Apr. 2024',
                tasks: [
                    'Designed and developed a restaurant recommendation, browsing and online ordering web platform',
                    'Optimized distance calculation between the user and the selected restaurant to suggest the shortest route',
                ],
                keyWords: ['Node.js', 'React', 'Firebase', 'MySQL', 'Selenium', 'GitHub'],
            },
        ],
    },
    {
        fromYear: '2025',
        toYear: '2025',
        title: 'Software Engineering Intern',
        enterprise: 'Paris North Computer Science Laboratory',
        icon: 'LIPN.png',
        team: 'Paris, France — May 2025 – Jul. 2025',
        tasks: [
            'Developed an interactive kiosk dedicated to raising awareness of energy-related issues at Institut Galilée, used by 200 users within the first two weeks',
            'Implemented a carpooling module including distance calculation optimization',
        ],
        keyWords: [
            'Node.js',
            'React',
            'MongoDB',
            'Docker',
            'GitLab',
        ],
    },
    {
        fromYear: '2023',
        toYear: '2023',
        title: 'Software Engineer Intern',
        enterprise: 'Expensya (Medius)',
        icon: 'expensya.png',
        team: 'Tunis, Tunisia — Jul. 2023 – Sept. 2023',
        tasks: [
            'Implemented Multi-Factor Authentication (MFA) in .NET within the Expensya solution, deployed notably for BNP Paribas',
        ],
        keyWords: [
            '.NET Core',
            'MySQL',
            'React',
            'Microsoft Azure',
        ],
    },
    {
        fromYear: '2022',
        toYear: '2022',
        title: 'Software Engineer Intern',
        enterprise: 'BFI Group',
        icon: 'bfigroupe.png',
        tasks: [
            'Designed and developed a digital banking portal for clients to process financial transactions',
            'Implemented secure payment workflows and user-friendly interfaces',
            'Built and integrated REST APIs to manage transactions and client data',
        ],
        keyWords: ['Java', 'SpringBoot', 'Angular', 'MySQL', 'REST API', 'GitHub'],
    },
];