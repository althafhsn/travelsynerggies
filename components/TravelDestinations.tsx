interface DestinationCardProps {
    title: string;
    description: string;
    imageSrc: string;
}

const DestinationCard = ({ title, description, imageSrc }: DestinationCardProps) => {
    return (
        <div className="relative bg-gradient-to-t from-black via-black/70 to-transparent group transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-gray-900 ">
            {/* Image container */}
            <div className="relative aspect-[3/4] overflow-hidden">
                <img
                    src={imageSrc}
                    alt={title}
                    className="w-full h-full object-cover"
                />

                {/* Gradient overlay - more subtle and darker */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
            </div>

            {/* Content - positioned closer to bottom with more compact spacing */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="md:text-2xl font-bold mb-2 text-amber-400 text-lg">{title}</h3>
                <p className="md:text-sm text-xs text-white/90 mb-6 max-w-[95%] leading-relaxed ">
                    {description}
                </p>
                <button className="inline-flex items-center space-x-2 border border-white/30 px-4 py-2 text-white md:text-sm text-xs hover:bg-yellow-500  transition-colors duration-300">
                    <span>Discover More</span>
                    <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

const TravelDestinations = () => {
    const destinations = [
        {
            title: "Inbound",
            description: "Discover local wonders with our expertly cured experiences.",
            imageSrc: "/landing/inbond.jpg"
        },
        {
            title: "Outbound",
            description: "Explore global destinations with personalized itineraries.",
            imageSrc: "/landing/outbound.jpg"
        },
        {
            title: "Ts Connect",
            description: "Seamless travel solutions powered by innovation.",
            imageSrc: "/landing/ts-connect.jpg"

        }
    ];

    return (
        <section className="bg-bg-services bg-cover py-16 px-4 min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Our Servises
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Lets's see the world with us with you and your family.
                    </p>
                </div>

                {/* Destinations Grid */}
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap gap-6 justify-center">
                        {/* First row - always tries to fit two cards */}
                        <div className="flex flex-wrap gap-6 justify-center w-full">
                            <div className="w-full sm:w-[calc(100%-2rem)] md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                                <DestinationCard {...destinations[0]} />
                            </div>
                            <div className="w-full sm:w-[calc(100%-2rem)] md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                                <DestinationCard {...destinations[1]} />
                            </div>
                            {/* Third card - keeps same width as others */}
                            <div className="w-full sm:w-[calc(100%-2rem)] md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                                <DestinationCard {...destinations[2]} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TravelDestinations;