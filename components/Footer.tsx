
import Link from 'next/link';
import React from 'react';

import { CiFacebook, CiInstagram } from "react-icons/ci";
import { FaWhatsapp, FaXTwitter } from 'react-icons/fa6';
interface Link {
    text: string;
    href: string;
}

interface SocialLink {
    href: string;
    icon: any;
    alt: string;
}

interface NavigationSection {
    title: string;
    links: Link[];
}

interface NavigationLinks {
    register: NavigationSection;
    company: NavigationSection;
    information: NavigationSection;
    destinations: NavigationSection;
}

interface FooterLinkColumnProps {
    title: string;
    links: Link[];
}

const Footer: React.FC = () => {
    const navigationLinks: NavigationLinks = {
        register: {
            title: "",
            links: [
                { text: "Our Service Spectrum", href: "/blogs#our-service-spectrum" },
                { text: "Blogs", href: "/" }
            ]
        },
        company: {
            title: "",
            links: [
                { text: "Terms and Conditions", href: "/blogs#terms-conditions" },
                { text: "Privacy Cookies", href: "/blogs#privacy-cookies" },
                { text: "Sustainable Tourism", href: "/blogs#sustainable-tourism" },
                { text: "Bucket List", href: "/blogs#bucket-list" },
            ]
        },
        information: {
            title: "",
            links: [
                { text: "Safety Guidelines", href: "/blogs#safety-guidelines" },
                { text: "Environment Policy", href: "/blogs#environment-policy" },

            ]
        },
        destinations: {
            title: "",
            links: [
                { text: "About Us", href: "/about-us" },
                { text: "Partners", href: "/blogs#partners" },
                { text: "Parters Login", href: "/" },
                { text: "Why Choose Us", href: "/blogs#why-choose-us" },
                { text: "Career", href: "/career" },
                { text: "Contact Us", href: "/contact" }
            ]
        }
    };

    const socialLinks: SocialLink[] = [
        { href: "https://web.facebook.com/travelsynergies/?_rdc=1&_rdr#", icon: <CiFacebook />, alt: "Facebook" },
        { href: "https://x.com/travelsynergies", icon: <FaXTwitter />, alt: "Twitter" },
        { href: "https://www.instagram.com/travel.synergies/?hl=en ", icon: <CiInstagram />, alt: "Instagram" },
        { href: "https://wa.me/1234567890", icon: <FaWhatsapp />, alt: "WhatsApp" }
    ];

    const FooterLinkColumn: React.FC<FooterLinkColumnProps> = ({ title, links }) => (
        <div>
            {title && <p className="font-semibold  text-orange-500 dark:text-white">{title}</p>}
            <div className="flex flex-col items-start mt-5 space-y-2">
                {links.map((link, index) => (
                    <a key={index} href={link.href}>
                        <p className="text-white text-sm transition-colors duration-300 dark:text-gray-300 dark:hover:text-orange-400 hover:underline hover:cursor-pointer hover:text-orange-500">
                            {link.text}
                        </p>
                    </a>
                ))}
            </div>
        </div>
    );

    return (
        <div>
            <footer className="font-sans">
                <hr className="border-orange-500 md:mt-8 h-2" />
                <div className="container px-6 py-6 mx-auto">
                    {/* Logo and Social Media Section */}
                    <div className="flex items-center justify-between pb-8">
                        {/* Logo Section */}
                        <Link href='/'>

                            <div className="flex flex-1 gap-4 items-center hover:cursor-pointer pb-5 md:pb-0">
                                <img
                                    src="/whitelogo.png"
                                    alt="Logo"
                                    className="md:w-48 w-36 transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                        </Link>

                        {/* Social Links Section */}
                        <div className="flex gap-4 hover:cursor-pointer sm:scale-75 sm:justify-end">
                            {socialLinks.map((social, index) => (
                                <Link
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    className="w-6 md:w-12 h-6 md:h-12 flex items-center justify-center text-2xl md:text-4xl  hover:text-black hover:bg-orange-500 hover:scale-125 rounded-full  shadow-md transition-all duration-300 hover:shadow-lg"
                                >
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                    </div>


                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
                        {/* Navigation Links Section - Takes 4 columns on large screens */}
                        <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
                            <FooterLinkColumn {...navigationLinks.register} />
                            <FooterLinkColumn {...navigationLinks.company} />
                            <FooterLinkColumn {...navigationLinks.information} />
                            <FooterLinkColumn {...navigationLinks.destinations} />
                        </div>

                        {/* Subscription Section - Takes 2 columns on large screens */}
                        <div className="lg:col-span-2">
                            <div className="bg-gray-800/20 p-6 rounded-lg">
                                <h1 className="text-xl font-semibold tracking-tight text-orange-500 mb-4">
                                    Subscribe to our newsletter to get updates
                                </h1>
                                <div className="max-w-md mx-auto lg:bg-transparent lg:border border-gray-300 rounded-3xl max-lg:py-3 lg:rounded-full lg:h-12 lg:p-1.5 flex flex-col sm:flex-row items-center gap-3 sm:gap-6 lg:gap-0">
                                    <input
                                        type="text"
                                        name="email"
                                        className="py-2 px-6 bg-transparent rounded-full max-lg:border border-gray-300 text-gray-100 placeholder:text-gray-100 focus:outline-none flex-1 lg:py-2 lg:px-6"
                                        placeholder="Enter your email.."
                                    />
                                    <div className="sm:w-full sm:items-center flex sm:justify-center items-end justify-end">
                                        <button
                                            type="submit"
                                            className="py-2 px-2 w-full text-sm bg-orange-500 rounded-full text-white font-semibold hover:bg-orange-700 transition-all"
                                        >
                                            Subscribe
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <hr className="my-8 border-white/20" />
                    <p className="text-white/80 text-center text-sm md:text-base">
                        © Travel Synergies {new Date().getFullYear()}. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;