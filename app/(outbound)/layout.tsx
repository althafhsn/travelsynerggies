import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Footer from "@/components/outbound/Footer";
import OutboundHeader from "@/components/outbound/OutboundHeder";




export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body

            >
                <div className=" bg-black/50 z-50">
                    <OutboundHeader />
                </div>
                {children}
                <Footer />

            </body>
        </html>
    );
}
