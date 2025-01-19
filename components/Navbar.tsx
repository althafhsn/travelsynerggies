'use client';

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const [activePath, setActivePath] = useState("");

  useEffect(() => {
    // Set the active path based on the current URL
    setActivePath(window.location.pathname);
  }, []);

  return (
    <div>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm transition-all duration-300">
        <div className="container mx-auto px-8 py-6">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="w-[50%] md:w-[25%] lg:w-[15%] xl:w-[12%]"
              aria-label="Home"
            >
              <img src="/whitelogo.png" alt="Logo" />
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-12">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/discover", label: "Careers" },
                { href: "/blog", label: "Social Responsibility" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`pb-1 text-white transition-all ${
                    activePath === link.href
                      ? "text-yellow-500 border-yellow-500 border-b-2"
                      : "hover:text-yellow-500 hover:border-yellow-500 hover:border-b-2"
                  }`}
                  aria-current={activePath === link.href ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Icon */}
            <div
              className="inline-block cursor-pointer lg:hidden text-2xl font-extrabold my-auto text-white"
              aria-label="Menu"
            >
              <CiMenuFries />
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
