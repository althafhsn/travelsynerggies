'use client'
import { Card, CardContent } from "@/components/ui/card";

const clients = [
    { name: 'GSS', imageUrl: "/inbound/Congress/Congress-Logos/GSS.webp" },
    { name: 'ITU', imageUrl: "/inbound/Congress/Congress-Logos/ITU_11zon.webp" },
    { name: 'Tank World', imageUrl: "/inbound/Congress/Congress-Logos/Tank World1.webp" },
    { name: 'WCIT', imageUrl: "/inbound/Congress/Congress-Logos/WCIT.webp" },
    { name: 'WTSA', imageUrl: "/inbound/Congress/Congress-Logos/WTSA.webp" },
    
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
                            <h2 className="text-1xl md:text-2xl pb-2  font-bold text-orange-500">
                                Prestigious Events managed by our team
                            </h2>
                            <p className="text-gray-300 text-sm md:text-lg pb-2">Our experience includes some of the most prestigious global events, such as:</p>

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
                    <h3 className="text-2xl md:text-3xl font-semibold text-white">Ready to Partner with Travel Synergies?</h3>
                    <p className="text-gray-400 text-sm md:text-base mt-2">Trust our 360° approach to deliver smarter agendas, deeper engagement, and flawless execution. Let’s turn your vision into a global benchmark.</p>
                    <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl">
                        Contact Us
                    </button>
                </div>
            </div>
        </>
    );
};

export default ClientLogosShowcase;