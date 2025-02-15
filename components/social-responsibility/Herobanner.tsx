

export default function HeroBanner() {
  return (
    <section
      className="py-8 sm:py-12 lg:py-16 relative bg-cover  bg-no-repeat min-h-[60vh] md:min-h-[70vh] bg-bg-social-responsibility "

    >
      {/* Overlay for better readability */}


      <div className="mx-auto px-2 z-10 h-full  ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:absolute md:left-12 md:bottom-12">
          {/* Text Content */}
          <div className="flex flex-col justify-center  bg-white/50 p-4 md:max-w-[80%] rounded-lg">
            <h2 className="text-xl md:text-3xl font-bold text-orange-500 text-left font-manrope mb-2">
              Navigating a Path of Responsibility
            </h2>
            <p className="text-xs md:text-lg text-justify text-black">
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