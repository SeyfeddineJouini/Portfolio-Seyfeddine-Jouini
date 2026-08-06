import { educationList } from './biography/education';
import { experienceList } from './biography/experience';

export interface CareerHighlight {
    category: string;
    icon: string;
    values: { title: string; subtitle: string; fromDate: string; toDate: string; enterprise?: string; logo?: string }[];
}

const educationHighlights = educationList.map((education) => ({
    title: education.university,
    subtitle: education.degree,
    fromDate: education.fromYear,
    toDate: education.toYear,
}));

const experienceHighlights = experienceList.map((experience) => ({
    title: experience.title,
    subtitle: experience.team,
    fromDate: experience.fromYear,
    toDate: experience.toYear,
    enterprise: experience.enterprise,
    logo: experience.icon,
}));

export const homeData = {
    hero: {
        heading: 'Welcome to My Portfolio',
        tagline:
            'Full-Stack Developer based in Paris, building impactful web and mobile applications.',
    },
    biographyPreview: {
        heading: 'About Me',
        ctaLabel: 'Read Full Biography',
        resume: `
    Full-Stack Developer with hands-on experience across the entire stack — from backend services
    in Python, Node.js and Spring Boot, to frontend applications with React and Flutter.
    I have worked in research labs, healthcare tech, and startups, and I enjoy building
    products that reach real users.
`,
    },
    careerHighlights: [
        {
            category: 'Education',
            icon: '🎓',
            values: educationHighlights,
        },
        {
            category: 'Experience',
            icon: '💼',
            values: experienceHighlights,
        },
    ] satisfies CareerHighlight[],
};
