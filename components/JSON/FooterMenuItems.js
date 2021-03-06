// /**
//  * interface ProjectMessages
//  * @param {string} title
//  * @param {string} url
//  * @param {string} href
//  */
import { FaInstagram, FaFacebookSquare, FaLinkedin } from "react-icons/fa";


const CompetitionMenuItems = [
    {
        title: 'Registration',
        url: '/',
        href: 'https://www.surveymonkey.ca/r/pivot2022?utm_source=Survey+Monkey&utm_campaign=Application'
    },
    {
        title: 'Competition Details',
        url: '/competition',
        href: "/competition"
    },
    {
        title: 'Event Schedule',
        url: '/schedule',
        href: "/schedule"
    },
    {
        title: 'Sponsors',
        url: '/sponsors',
        href: "/sponsors"
    }
];

const AboutMenuItems = [
    {
        title: 'Contact Info',
        url: '/contact',
        href: '/contact'
    },
    // {
    //     title: 'FAQ',
    //     url: '/',
    //     href: '/'
    // },
    {
        title: 'Organizing Committee',
        url: '/about/organizers',
        href: '/about/organizers'
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

