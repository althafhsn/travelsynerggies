import Link from "next/link";

export default function TravelTech() {
    return (
        <section className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {/* Text Section */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-semibold text-White">
                        Travel Synergies <span className="text-orange-500 font-bold">Travel Tech</span>
                    </h2>
                    <p className="text-gray-200 mt-4 leading-relaxed text-justify">
                        Travel Synergies leads the way in embracing advanced technology, employing state-of-the-art
                        online systems for a seamless user experience. Our innovative approach facilitates direct
                        connections with top-tier global hotel chains, solidifying our position at the forefront of
                        technological progress as a fundamental component of our business strategy.
                    </p>
                    <Link href='travel-tech'>
                        <button className="mt-6 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-md shadow-md transition duration-300">
                            Read More
                        </button>
                    </Link>
                </div>

                {/* Image Section */}
                <div className="flex justify-center">
                    <img
                        src="/inbound/Inbound/travel-tech/Best-tour-operator-in-dubai.webp"
                        alt="Travel Tech"
                        className="w-full max-w-sm md:max-w-md rounded-lg shadow-lg h-[40vh]"
                    />
                </div>
            </div>
        </section>
    );
}
