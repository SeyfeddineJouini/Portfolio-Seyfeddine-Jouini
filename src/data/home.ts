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
    Full-Stack & AI Engineer with hands-on experience building end-to-end applications across fintech, greentech, and healthcare. From backend services in Node.js, SpringBoot and .Net to frontend experiences with React and Flutter, I enjoy turning complex challenges into products that create real-world impact.
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
