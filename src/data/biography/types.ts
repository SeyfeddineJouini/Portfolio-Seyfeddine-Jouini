export interface SubProject {
    title: string;
    period: string;
    tasks: string[];
    keyWords: string[];
}

export interface ProfessionalExperience {
    fromYear: string;
    toYear: string;
    title: string;
    team: string;
    enterprise: string;
    icon: string;
    tasks: string[];
    keyWords: string[];
    subProjects?: SubProject[];
}

export interface Education {
    fromYear: string;
    toYear: string;
    degree: string;
    university: string;
    icon: string;
    additionalInformation?: string;
}

export interface AreaOfExpertise {
    title: string;
    technologies: { label: string; level: number; icon: string }[];
}

export interface Language {
    type: string;
    level: 'Native' | 'Bilingual' | 'Fluent' | 'Professional';
}

export interface Award {
    title: string;
    description: string;
}

export interface Interest {
    title: string;
    icon: string;
}
