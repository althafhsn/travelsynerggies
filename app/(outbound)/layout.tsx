

import Footer from "@/components/outbound/Footer";
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
