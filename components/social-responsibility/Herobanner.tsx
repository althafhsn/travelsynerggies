import Image from 'next/image';

export default function HeroBanner() {
  return (
    <section
      className="py-8 sm:py-12 lg:py-16 relative bg-cover  bg-no-repeat min-h-[60vh] md:min-h-[80vh] lg:min-h-[90vh]  w-[100%] bg-bg-social-responsibility"

    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 text-white h-full flex ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16">
          {/* Text Content */}
          <div className="flex flex-col justify-center space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-500 text-left font-manrope">
              Navigating a Path of Responsibility
            </h2>
            <p className="text-sm md:text-xl text-justify">
              At Travel Synergies, we believe that travel not only broadens horizons but also brings with it a responsibility to contribute positively to the destinations we serve and the global community at large. We are dedicated to making a positive impact on society, the environment, and the communities where we operate. Our Corporate Social Responsibility (CSR) initiatives reflect our commitment to sustainable and ethical business practices. Through sustainable practices, community engagement, and ethical business conduct, we strive to make a meaningful difference while ensuring unforgettable travel experiences for our customers.
            </p>
          </div>

          {/* Empty div to maintain grid structure */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
}