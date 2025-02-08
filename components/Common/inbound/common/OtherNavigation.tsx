'use client'


import Link from "next/link"
import { usePathname } from "next/navigation"

const OtherNavigation = () => {
    const pathname = usePathname();
    const links = [
        
        {
            name: "FIT's",
            path: '/FITs'
        },
        {
            name: 'Groups',
            path: '/groups'
        },
        {
            name: 'MICE',
            path: '/MICE'
        },
        {
            name: 'Congresses',
            path: '/congresses'
        },
        {
            name: 'Cruises',
            path: '/cruises'
        },
       
    ]
    return (
        <nav className="flex justify-between text-center gap-1  bg-black/20 rounded-lg">
            {links.map((link, index) => {
                return <Link href={link.path}
                    key={index}
                    className={`${link.path === pathname && "text-white  bg-orange-500"} capitalize font-bold text-sm hover:bg-orange-500 hover:text-white transition-all px-1 md:px-3 py-1 rounded-md`}
                >{link.name}</Link>
            })}
        </nav>
    )
}

export default OtherNavigation