// /**
//  * interface ProjectMessages
//  * @param {string} title
//  * @param {string} url
//  * @param {string} href
//  */
import { FaInstagram, FaFacebookSquare, FaLinkedin } from "react-icons/fa";


const CompetitionMenuItems = [
    {
        title: 'Overview',
        url: '/',
        href: '/'
    },
    {
        title: 'Registration',
        url: '/',
        href: '/'
    },
    {
        title: 'Competition Structure',
        url: '/',
        href: "/"
    },
    {
        title: 'Event Schedule',
        url: '/',
        href: "/"
    }
];

const AboutMenuItems = [
    {
        title: 'Contact Info',
        url: '/',
        href: '/'
    },
    {
        title: 'FAQ',
        url: '/',
        href: '/'
    }
];

const SponsorshipMenuItems = [
    {
        title: 'Benefits',
        url: '/',
        href: '/'
    },
    {
        title: 'Previous Sponsors',
        url: '/',
        href: '/'
    },
    {
        title: 'Ways of Sponsoring',
        url: '/',
        href: "/"
    }
];

const SocialMediaItems = [
    {
        icon: '',
        title: 'Contact Info',
        url: '/',
        href: '',
        src: '/'
    },
    {
        title: 'Contact Info',
        url: '/',
        href: '/',
        src: '/'
    },
    {
        title: 'Contact Info',
        url: '/',
        href: '/',
        src: '/'
    },
];

const MenuItems = {
    sponsorship: SponsorshipMenuItems,
    about: AboutMenuItems,
    competition: CompetitionMenuItems,
    social: SocialMediaItems
}

export default MenuItems;

