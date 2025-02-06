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
        <nav className="grid grid-cols-5 text-center gap-2  bg-black/20 rounded-lg">
            {links.map((link, index) => {
                return <Link href={link.path}
                    key={index}
                    className={`${link.path === pathname && "text-white  bg-orange-500"} capitalize font-bold  hover:bg-orange-500 hover:text-white transition-all px-3 py-1 rounded-md`}
                >{link.name}</Link>
            })}
        </nav>
    )
}

export default OtherNavigation