
import { FaLeaf } from "react-icons/fa6";
import { MdPlayArrow } from "react-icons/md";

export default function EnvironmentalSustainability() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 text-white container mx-auto">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-500 mb-6 ">
        <FaLeaf className='inline-block mr-2 text-orange-500' /> Environmental Sustainability
      </h2>

      {/* Carbon Offset Program and Eco-friendly Initiatives */}
      <div className="gap-6 sm:gap-8">
        {/* Carbon Offset Program */}
        <div className="grid grid-cols-1 md:grid-cols-4  items-center gap-4  bg-black rounded-lg shadow-md">
          <div className="flex items-center justify-center w-full max-w-[600px] h-auto max-h-[400px] mx-auto">
            <img
              src="/social-responsibilty/carbon-offset.webp"
              alt="Carbon Offset Program"
              className="w-full h-full max-h-[400px] object-cover rounded-lg"
            />
          </div>


          <div>
            <h3 className="text-lg sm:text-xl font-bold text-orange-500 mb-2">
              <MdPlayArrow className='inline-block mr-2 text-orange-500' />
              Carbon Offset Program
            </h3>
            <p className="text-sm sm:text-base text-justify">
              As a leading travel and tourism company, we recognize the imperative to address carbon footprint and mitigate the environmental impact of our operations. We are committed to taking proactive steps towards sustainability by implementing a comprehensive Carbon Offset Program. The initiative aims to neutralize the greenhouse gas emissions generated by our activities, thereby contributing to the global fight against climate change while offering travelers the opportunity to participate in responsible travel experiences.
            </p>
          </div>
          <div className="flex items-center justify-center w-full max-w-[600px] h-auto max-h-[400px] mx-auto">
            <img
              src="/social-responsibilty/eco-tourism.webp"
              alt="Carbon Offset Program"
              className="w-full h-full max-h-[400px] object-cover rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-orange-500 mb-2">
              <MdPlayArrow className='inline-block mr-2 text-orange-500' />
              Eco-friendly Initiatives
            </h3>
            <p className="text-sm sm:text-base text-justify">
              From implementing energy-efficient technologies in our offices to reducing single-use plastics in our tours, and paper for documentation, we are committed to minimizing waste and promoting eco-friendly alternatives. This involves digitizing documents and processes, reducing reliance on physical paper, thus fostering efficiency and sustainability while minimizing environmental impact. We have transitioned from traditional paper business cards to innovative biodegradable digital cards for all our employees. This eco-friendly approach aligns with our commitment to sustainability and minimizes our environmental footprint. Leveraging on our technological advancements, our goal is to achieve complete paperless operations by 2028.
            </p>
          </div>
        </div>
      </div>

      {/* Responsible Tourism */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-5  gap-4 items-center justify-center  bg-black rounded-lg shadow-md">
        <img
          src="/social-responsibilty/responsible-tourism.webp "
          alt="Responsible Tourism"
          className="rounded-lg shadow-sm w-full h-auto col-span-3 object-cover"
        />
        <div className=" col-span-2">
          <h3 className="text-lg sm:text-xl font-bold text-orange-500 mb-2">
            <MdPlayArrow className='inline-block mr-2 text-orange-500' />
            Responsible Tourism
          </h3>
          <p className="text-sm sm:text-base text-justify ">
            We partner with local communities and organizations to promote responsible tourism practices that respect cultural heritage, protect wildlife, and support sustainable livelihoods.
          </p>
        </div>
      </div>
    </div>
  );
}