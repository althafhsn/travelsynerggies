
import InboundFooter from "@/components/Common/inbound/components/InboundFooter";
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
                <InboundFooter />

            </body>
        </html>
    );
}
