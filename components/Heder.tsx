import Link from "next/link"
import { Button } from "./ui/button"
import Nav from "./Nav"
import MobileNav from "./MobileNav"

const Header = () => {
    return (
        <div className="py-4 xl:py-6 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/* logo */}
                <Link href='/'>
                    <img src="/whitelogo.png" alt="logo" className="w-48"/>
                </Link>
                {/* desktop nav {& hire me button} */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href='/contact'>
                        <button className="bg-orange-500 py-2 px-2 rounded-full">Contact us</button>
                    </Link>

                </div>

                {/* mobile nav */}

                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div >
        </div >
    )
}

export default Header