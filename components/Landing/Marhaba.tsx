

const Marhaba = () => {
    return (
        <div className="container mx-auto text-white min-h-screen px-6 md:px-20 py-6">
            {/* Logo */}
            <div className="flex justify-center mb-8">
                <img src="/logo.png" alt="Travel Synergies Logo" className="h-16" />
            </div>

            {/* Heading */}
            <h1 className="text-orange-500 text-4xl md:text-5xl font-bold text-center mb-8">
                Marhaba!
            </h1>

            {/* Content */}
            <section className="py-2 lg:py-4">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="flex justify-start items-center">
                            <img
                                src="/inbound/Inbound/Instagram/culture-and-heritage.webp"
                                alt=""
                                className="object-cover h-[300px] xl:h-[530px] w-full max-w-[550px] rounded-lg"
                            />
                        </div>
                        <div className="pb-4 flex items-center">
                            <div className="w-full">

                                <p className="text-sm md:text-base text-gray-200 text-justify py-2 mx-auto">
                                    At Travel Synergies, we take pride in being recognized as a global leader in Destination Management. With an unwavering commitment to excellence, we offer unparalleled services that redefine the art of travel and event planning, creating lasting memories and experiences of a lifetime. Our exceptional Travel Designers are more than just experts; they are local connoisseurs with a global perspective. Trained on an international scale, they bring an unmatched level of insight, ensuring that your journey is an immersion into the heart of every destination. We take pride in serving the best holiday experiences, whether it be leisure individual travel or group tours.
                                </p>
                                <p className="text-sm md:text-base text-gray-200 text-justify mx-auto py-2">
                                    From intimate gatherings to grand-scale events, we specialize in creating experiences that resonate. Our expertise lies in swiftly connecting you with the finest hotels, event facilities, tours, and meticulously orchestrating the logistical marvels necessary to host flawless private and professional events, as well as incentive programs. Our portfolio includes handling the United Nations Congress, diplomatic logistics, concerts, sporting events, and large corporate MICE events, all supported by our cutting-edge technology.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Creative Since Section */}
            <section className="py-2">
                <div className="mx-auto  px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9">
                        <div className="lg:pr-24  flex items-center  justify-start order-2 md:order-none">
                            <div className="w-full flex flex-col justify-center ">
                                <p className="text-sm md:text-base text-gray-200 text-justify   py-2">


                                    Venture into the extraordinary with our diverse network of independent suppliers and local guides. Drawing inspiration from their creativity, we curate fresh and innovative ideas that breathe life into your travel arrangements. With our comprehensive range of options, including lodging, transportation, Immersive Tours, and more, your journey becomes a bespoke masterpiece tailored to your desires. We can provide insightful advice, lead you off the beaten track, and introduce you to real experiences you wouldn't find on your own.
                                    <br />
                                    <br />

                                    We take pride in our commitment to excellence, ensuring that every aspect of your travel and event planning is handled with the highest standards. Join us in creating unforgettable experiences that will be cherished for a lifetime.


                                </p>
                            </div>
                        </div>
                        <div className=" flex items-center justify-center order-1 md:order-none">
                            <img
                                src="/landing/hero.jpg"
                                alt="About Us tailwind page"
                                className=" lg:block object-cover h-[300px] xl:h-[530px] w-full max-w-[550px] rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Marhaba;
