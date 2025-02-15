
import Footer from "@/components/outbound/Footer";
import OutboundHeader from "@/components/outbound/OutboundHeder";
import InboundFooter from "@/components/root/Footer";




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
                <InboundFooter />

            </body>
        </html>
    );
}
