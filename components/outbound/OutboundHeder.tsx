'use client';
import Link from "next/link"
import OutboundNav from "./OutboundNav";
import OutboundMobileNav from "./OutboundMobileNav";



const OutboundHeder = () => {
    return (
        <div className="py-2 xl:py-3 text-white">
            <div className="  mx-auto flex justify-between items-center px-6 md:px-12 ">
                {/* logo */}
                <Link href='/'>
                    <img src="/logo.png" alt="logo" className="w-56 " />
                </Link>
                {/* desktop nav {& hire me button} */}
                <div className="hidden xl:flex items-center gap-8">
                    <OutboundNav />
                </div>

                {/* mobile nav */}

                <div className="xl:hidden">
                    <OutboundMobileNav />
                </div>
            </div >
        </div >
    )
}

export default OutboundHeder