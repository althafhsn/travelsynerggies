export default function HeroBanner() {
  return (
    <section
      className="relative min-h-[60vh] md:min-h-[70vh] bg-cover bg-no-repeat bg-bg-social-responsibility py-[5vh] sm:py-[8vh] lg:py-[10vh]"
    >
      <div className="mx-auto px-[2%] z-10 h-full w-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[2vw] w-full">
          {/* Text Content */}
          <div className="flex flex-col justify-center bg-white/50 p-[2vw] md:max-w-[80%] rounded-lg">
            <h2 className="text-[clamp(1rem,2vw,2rem)] font-bold text-orange-500 text-left font-manrope mb-[1vh]">
              Navigating a Path of Responsibility
            </h2>
            <p className="text-[clamp(0.75rem,1.5vw,1.25rem)] text-justify text-black leading-[1.5]">
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
