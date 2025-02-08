'use client'

import { useState } from 'react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { CiMenuFries } from 'react-icons/ci'

const links = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Inbound',
        path: '/inbound'
    },
    {
        name: 'Outbound',
        path: '/outbound'
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

const OutboundMobileNav = () => {
    const pathName = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className='flex justify-center items-center'>
                <CiMenuFries className='text-[32px] text-accent' />
            </SheetTrigger>
            <SheetContent className='flex flex-col '>
                <SheetHeader>
                    <SheetTitle></SheetTitle>
                    <SheetDescription></SheetDescription>
                </SheetHeader>
                {/* logo */}
                <div className='flex items-center justify-center'>

                <Link href='/' onClick={() => setOpen(false)}>
                    <img src="/whitelogo.png" alt="logo" className="w-48 py-4" />
                </Link>
                </div>
                {/* nav */}
                <nav className='flex flex-col justify-center items-center gap-8'>
                    {links.map((link, index) => (
                        <Link 
                            href={link.path}
                            key={index}
                            onClick={() => setOpen(false)}
                            className={`${link.path === pathName && 'text-orange-500 border-b-2 border-orange-500'} font-bold text-xl capitalize hover:text-orange-500 transition-all`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default OutboundMobileNav