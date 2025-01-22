import React from 'react';

interface Link {
    text: string;
    href: string;
}

interface SocialLink {
    href: string;
    icon: string;
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
                { text: "Our Service Spectrum", href: "/blogs#our-service-spectrum" }
            ]
        },
        company: {
            title: "",
            links: [
                { text: "Terms and Conditions", href: "/careers" },
                { text: "Privacy Cookies", href: "/blogs#privacy-cookies" },
                { text: "Sustainable Tourism", href: "/blogs#sustainable-tourism" },
                { text: "Bucket List", href: "/blogs#bucket-list" },
                { text: "Outbound Holidays", href: "/blogs#outbound-holidays" }
            ]
        },
        information: {
            title: "",
            links: [
                { text: "Safety Guidelines", href: "/blogs#safety-guidelines" },
 
            ]
        },
        destinations: {
            title: "",
            links: [
                { text: "About Us", href: "/blogs#about-us" },
                { text: "Partners", href: "/blogs#partners" },
                { text: "Parters Login", href: "/" },
                { text: "Why Choose Us", href: "/" },
                { text: "Career", href: "/blogs#contact-us" },
                { text: "Contact Us", href: "/blogs#contact-us" }
            ]
        }
    };

    const socialLinks: SocialLink[] = [
        { href: "https://facebook.com", icon: "https://www.svgrepo.com/show/303114/facebook-3-logo.svg", alt: "Facebook" },
        { href: "https://twitter.com", icon: "https://www.svgrepo.com/show/303115/twitter-3-logo.svg", alt: "Twitter" },
        { href: "https://instagram.com", icon: "https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg", alt: "Instagram" },
        { href: "https://wa.me/1234567890", icon: "https://www.svgrepo.com/show/475692/whatsapp-color.svg", alt: "WhatsApp" }
    ];

    const FooterLinkColumn: React.FC<FooterLinkColumnProps> = ({ title, links }) => (
        <div>
            {title && <p className="font-semibold text-orange-500 dark:text-white">{title}</p>}
            <div className="flex flex-col items-start mt-5 space-y-2">
                {links.map((link, index) => (
                    <a key={index} href={link.href}>
                        <p className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-orange-400 hover:underline hover:cursor-pointer hover:text-orange-500">
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
                <hr className="border-orange-500 md:my-8 h-2" />
                <div className="container px-6 py-6 mx-auto">
                    {/* Logo and Social Media Section */}
                    <div className="flex flex-col md:flex-row items-center justify-between pb-8">
                        <div className="flex flex-1 gap-4 hover:cursor-pointer pb-5 md:pb-0">
                            <img src="/whitelogo.png" alt="Logo" className="w-48" />
                        </div>
                        
                        <div className="flex gap-4 hover:cursor-pointer sm:scale-75 sm:justify-end">
                            {socialLinks.map((social, index) => (
                                <a 
                                    key={index}
                                    href={social.href} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    <img 
                                        src={social.icon} 
                                        width="30" 
                                        height="30" 
                                        alt={social.alt} 
                                    />
                                </a>
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
                                    Subscribe our newsletter to get updates
                                </h1>
                                <div className="flex flex-col space-y-3">
                                    <input 
                                        id="email" 
                                        type="email" 
                                        className="px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-orange-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-orange-300" 
                                        placeholder="Email Address" 
                                    />
                                    <button className="px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform focus:outline-none bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring focus:ring-orange-300 focus:ring-opacity-80">
                                        Subscribe
                                    </button>
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