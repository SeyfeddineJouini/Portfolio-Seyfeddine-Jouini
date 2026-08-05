const firstName = 'Seyfeddine';
const lastName = 'Jouini';
const fullName = `${firstName} ${lastName}`;
const resumeDownloadName = `${firstName.toLowerCase()}-${lastName.toLowerCase()}-resume.pdf`;

export const siteConfig = {
    firstName,
    lastName,
    fullName,
    role: 'Software Engineer',
    title: 'Software Engineer Portfolio',
    description:
        'A personal portfolio and engineering blog for a software engineer, built with Astro.',
    author: fullName,
    keywords: 'software engineer, portfolio, blog, web development, architecture',
    siteUrl: 'https://example.com',
    profileImage: '/profileportfolio.png',
    profileImageAlt: `${fullName} profile illustration`,
    resumePath: '/resume.pdf',
    resumeDownloadName,
    openToWork: false,
    openToWorkLabel: 'Open to Work',
    navigation: [
        { label: 'Home', href: '/' },
        { label: 'Biography', href: '/biography' },
        { label: 'Blog', href: '/blog' },
        { label: 'Contact', href: '#contact' },
    ],
    accessibility: {
        menuToggleLabel: 'Toggle menu',
        backToTopLabel: 'Back to top',
        themeToggleLabel: 'Theme toggler',
    },
};
