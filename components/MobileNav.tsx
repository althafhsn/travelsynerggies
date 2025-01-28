'use client'

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { CiMenuFries } from 'react-icons/ci'

const links = [
    {
        name: 'Outbound',
        path: '/'
    },
    {
        name: 'Inbound',
        path: '/services'
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
        name: 'About',
        path: '/about-us'
    },
        
]
const MobileNav = () => {
    const pathName = usePathname();

    return (
        <Sheet>
            <SheetTrigger className='flex justify-center items-center'>
                <CiMenuFries className='text-[32px] text-accent' />
            </SheetTrigger>
            <SheetContent className='flex flex-col '>
                <SheetHeader>
                    <SheetTitle></SheetTitle>
                    <SheetDescription></SheetDescription>
                </SheetHeader>
                {/* logo  */}
                <Link href='/'>
                    <img src="/whitelogo.png" alt="logo" className="w-48 py-4" />
                </Link>
                {/* nav */}
                <nav className='flex flex-col justify-center items-center gap-8'>
                    {links.map((link, index) => {
                        return <Link href={link.path}
                            key={index}
                            className={`${link.path === pathName && 'text-orange-500 border-b-2 border-orange-500'} text-xl capitalize hover:text-orange-500 transition-all`}>{link.name}</Link>
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav
