const firstName = 'Seyfeddine';
const lastName = 'Jouini';
const fullName = `${firstName} ${lastName}`;
const resumeDownloadName = `${firstName.toLowerCase()}-${lastName.toLowerCase()}-resume.pdf`;

export const siteConfig = {
    firstName,
    lastName,
    fullName,
    role: 'FullStack Engineer | AI Integrator',
    title: 'Full-Stack Developer Portfolio',
    description:
        'Personal portfolio of Seyfeddine Jouini, Full-Stack Developer based in Paris, France.',
    author: fullName,
    keywords: 'full-stack developer, software engineer, portfolio, web development, Python, React, Node.js',
    siteUrl: 'https://example.com',
    profileImage: '/profileportfolio.png',
    profileImageAlt: `${fullName} profile illustration`,
    resumePath: '/resume.pdf',
    resumeDownloadName,
    openToWork: true,
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
