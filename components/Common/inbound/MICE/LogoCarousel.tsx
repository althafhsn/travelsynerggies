'use client'
import { Card, CardContent } from "@/components/ui/card";

const clients = [
    { name: 'Visa', imageUrl: "/inbound/MICE/MICE-Logos/visa.webp" },
    { name: 'Takeda', imageUrl: "/inbound/MICE/MICE-Logos/takeda7059.webp" },
    { name: 'Nestle', imageUrl: "/inbound/MICE/MICE-Logos/Nestle.png" },
    { name: 'Johnson and Johnson', imageUrl: "/inbound/MICE/MICE-Logos/Johnson-and-Johnson.png" },
    { name: 'Kaspersky', imageUrl: "/inbound/MICE/MICE-Logos/kaspersky.webp" },
    { name: 'Astra Zeneca', imageUrl: "/inbound/MICE/MICE-Logos/astra-zeneca.png" },
    { name: 'HP', imageUrl: "/inbound/MICE/MICE-Logos/HP.png" },
    { name: 'Stada', imageUrl: "/inbound/MICE/MICE-Logos/Eli_Lilly_and_Company.svg.png" },
    { name: 'Chanel', imageUrl: "/inbound/MICE/MICE-Logos/Chanel_logo_interlocking_cs.svg.png" },
    { name: 'Microsoft', imageUrl: "/inbound/MICE/MICE-Logos/Jaguar.webp" },
    { name: 'Microsoft', imageUrl: "/inbound/MICE/MICE-Logos/Microsoft.webp" },
    { name: 'Mars', imageUrl: "/inbound/MICE/MICE-Logos/Nycomed.svg.png" },
    { name: 'BAT', imageUrl: "/inbound/MICE/MICE-Logos/2x2_TV_Logo.svg.png" },
];

const ClientLogosShowcase = () => {
    return (
        <>
            <style jsx global>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                
                .animate-scroll {
                    animation: scroll 10s linear infinite;
                }
                
                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
            
            <div className=''>
                <Card className="w-full shadow-lg bg-black">
                    <CardContent className="p-6">
                        <div className="space-y-4">
                            <h2 className="text-2xl md:text-5xl pb-5 text-center font-bold text-orange-500">
                                Prestigious Events Managed by Our Team
                            </h2>

                            <div className="relative overflow-hidden">
                                <div className="flex space-x-8 py-8 animate-scroll">
                                    <div className="flex space-x-8">
                                        {clients.map((client, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center justify-center w-40 h-20 rounded-lg border border-orange-500 p-4 hover:border-orange-600 transition-colors duration-300"
                                            >
                                                <img
                                                    src={client.imageUrl}
                                                    alt={`${client.name} logo`}
                                                    className="object-contain w-full h-full filter hover:brightness-110 transition-all duration-300"
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    {/* Duplicate set for infinite scroll */}
                                    <div className="flex space-x-8">
                                        {clients.map((client, index) => (
                                            <div
                                                key={`duplicate-${index}`}
                                                className="flex items-center justify-center w-40 h-20 rounded-lg border border-orange-500 p-4 hover:border-orange-600 transition-colors duration-300"
                                            >
                                                <img
                                                    src={client.imageUrl}
                                                    alt={`${client.name} logo`}
                                                    className="object-contain w-full h-full filter hover:brightness-110 transition-all duration-300"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <div className="text-center mt-8">
                    <h3 className="text-xl md:text-2xl font-semibold text-white">Ready to Partner with Travel Synergies?</h3>
                    <p className="text-gray-400 mt-2">Whether you're planning a solo adventure, a romantic getaway, or a family vacation, our expertise and resources ensure a memorable journey.</p>
                    <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl">
                        Contact Us
                    </button>
                </div>
            </div>
        </>
    );
};

export default ClientLogosShowcase;