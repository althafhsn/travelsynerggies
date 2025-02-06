'use client';
import Link from "next/link"
import InboundMobileNav from "./InboundMobileNav";
import InboundNav from "./InboundNav";


const InboundHeader = () => {
    return (
        <div className="py-4 xl:py-6 text-white">
            <div className="  mx-auto flex justify-between items-center px-6 md:px-12 ">
                {/* logo */}
                <Link href='/'>
                    <img src="/whitelogo.png" alt="logo" className="w-48 h-[34px]"/>
                </Link>
                {/* desktop nav {& hire me button} */}
                <div className="hidden xl:flex items-center gap-8">
                    <InboundNav />
                </div>

                {/* mobile nav */}

                <div className="xl:hidden">
                    <InboundMobileNav />
                </div>
            </div >
        </div >
    )
}

export default InboundHeader