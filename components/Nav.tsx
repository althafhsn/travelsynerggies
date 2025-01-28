'use client'


import Link from "next/link"
import { usePathname } from "next/navigation"

const Nav = () => {
    const pathname = usePathname();
    const links = [

        {
            name: 'Inbound',
            path: '/services'
        },
        {
            name: 'Outbound',
            path: '/'
        },
        {
            name: 'careers',
            path: '/career'
        },
        {
            name: 'Social Responsibility',
            path: '/social'
        },
        {
            name: 'About Us',
            path: '/about-us'
        },
    ]
    return (
        <nav className="flex gap-8 ">
            {links.map((link, index) => {
                return <Link href={link.path}
                    key={index}
                    className={`${link.path === pathname && "text-orange-500 border-b-2 border-orange-500"} capitalize font-medium hover:text-orange-500 hover:border-b-2 hover:border-orange-500 transition-all`}
                >{link.name}</Link>
            })}
        </nav>
    )
}

export default Nav