
import InboundHeader from "@/components/Common/inbound/components/InboundHeader";
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
                <div className=" bg-black/50 z-50">
                    <InboundHeader />
                </div>
                {children}
                <InboundFooter />

            </body>
        </html>
    );
}
