'use client';
import Link from "next/link"
import OutboundNav from "./OutboundNav";
import OutboundMobileNav from "./OutboundMobileNav";



const OutboundHeder = () => {
    return (
        <div className="py-4 xl:py-6 text-white">
            <div className="  mx-auto flex justify-between items-center px-6 md:px-12 ">
                {/* logo */}
                <Link href='/'>
                    <img src="/whitelogo.png" alt="logo" className="w-48 h-[34px]" />
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