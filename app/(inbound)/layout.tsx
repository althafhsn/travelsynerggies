
import OutboundHeder from "@/components/outbound/OutboundHeder";
import InboundFooter from "@/components/Common/inbound/components/InboundFooter";




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
                <InboundFooter />

            </body>
        </html>
    );
}
