import { withBase } from "./utils/helpers";

export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    eyebrowText?: string;
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type About = {
    title?: string;
    text?: string;
};

export type ContactInfo = {
    title?: string;
    text?: string;
    socialProfiles?: {
        text?: string;
        href?: string;
    }[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    about?: About;
    contactInfo?: ContactInfo;
    subscribe?: Subscribe;
};

const siteConfig: SiteConfig = {
    website: 'https://YJK-forDev.github.io',
    title: 'Yujin Kim',
    description: 'Yujin Kim, CS PhD Student at the University of Wisconsin-Madison',
    headerNavLinks: [
        {
            text: 'Home',
            href: withBase('/')
        },
        {
            text: 'Publications',
            href: withBase('/publications')
        },
        {
            text: 'Contact',
            href: withBase('/contact')
        }
    ],
    socialLinks: [
        {
            text: 'Google Scholar',
            href: 'https://scholar.google.com/citations?hl=en&user=Kpo-e_EAAAAJ'
        },
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/yujinkim0v0'
        }
    ],
    hero: {
        title: 'Yujin Kim',
        actions: [
            {
                text: 'CV',
                href: withBase('/YujinKim_CV.pdf')
            }
        ]
    },
    contactInfo: {
        title: 'Contact',
        text: "I welcome any coffee chats, research discussions, or questions 😉 Please feel free to reach out!",
        socialProfiles: [
            {
                text: "Email",
                href: "mailto:yujinkim@cs.wisc.edu"
            },
            {
                text: "LinkedIn",
                href: "https://www.linkedin.com/in/yujinkim0v0"
            }
        ]
    },
};

export default siteConfig;
