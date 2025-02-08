import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Footer from "@/components/outbound/Footer";
import OutboundHeader from "@/components/outbound/OutboundHeder";
import OutboundHeder from "@/components/outbound/OutboundHeder";




export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
            >
                <OutboundHeder />
                {children}
                <Footer />

            </body>
        </html>
    );
}
