import { FaBrain, FaFolderOpen, FaTag, FaUserCheck } from "react-icons/fa";
import { MdBusinessCenter, MdNaturePeople, MdRateReview, MdSecurity, MdSupportAgent } from "react-icons/md";
import { BiSupport } from 'react-icons/bi';


const WhyChoosUsInbound = () => {


  const WhyChoose = [
    {
      icon: <FaBrain className="w-10 h-10 text-orange-600 mb-2" />,
      title: "Expert Knowledge",
      description: "Our team brings a wealth of experience and deep insights into the travel industry, with a deep understanding of the latest trends, destinations, travel requirements, and more.",
    },
    {
      icon: <FaFolderOpen className="w-10 h-10 text-orange-600 mb-2" />,
      title: "Comprehensive Portfolio",
      description: "From FITs and group travel to MICE, events, and cruises, our expertise ensures seamless and memorable experiences for every traveler.",
    },
    {
      icon: <FaUserCheck className="w-10 h-10 text-orange-600 mb-2" />,
      title: "Personalized Service",
      description: "We tailor travel packages to meet individual preferences, interests, and budgets, providing memorable holiday experiences.",
    },
    {
      icon: <FaTag className="w-10 h-10 text-orange-600 mb-2" />,
      title: "Unbeatable Prices",
      description: "Travel should be accessible to everyone, and we provide the best deals without compromising quality.",
    },
    {
      icon: <MdSupportAgent className="w-10 h-10 text-orange-600 mb-2" />,
      title: "Dedicated Support",
      description: "Our commitment to excellence is backed by a team of professionals who provide round-the-clock assistance. With personalized care at every step, we ensure smooth and stress-free journeys for our customers and partners alike.",
    },
    {
      icon: <MdSecurity className="w-10 h-10 text-orange-600 mb-2" />,
      title: "Safety and Security",
      description: "The safety of our guests is our utmost priority. With a robust safety and security policy in place, which includes emergency response planning, risk assessment and crisis management, we ensure every aspect in this regard is efficiently handled to provide a hassle free experience. Our team of experts is trained to handle any situation that may arise, ensuring that our customers are always safe and secure.",
    },
    {
      icon: <MdNaturePeople className="w-10 h-10 text-orange-600 mb-2" />,
      title: "Sustainable Tourism",
      description: "We're committed to sustainable tourism practices, which means that we strive to minimize our impact on the environment and local communities. By establishing a close collaboration, our team of experts work closely with local suppliers and tour operators to create travel experiences that are both environmentally responsible and economically beneficial to the regions we visit.",
    },
    {
      icon: <MdBusinessCenter className="w-10 h-10 text-orange-600 mb-2" />,
      title: "Co-Branding Opportunities",
      description: "Collaborate with Travel Synergies to enhance your brand through co-branded travel solutions. Leverage on our global network and expertise to create unique and memorable experiences.",
    },
    {
      icon: <MdRateReview className="w-10 h-10 text-orange-600 mb-2" />,
      title: "What our Guests have to say",
      description: "The Travel Synergies difference is best reflected in the firsthand experiences of our valued guests. We are proud to share their testimonials and showcase the memories we’ve helped create.",
    },
    {
      icon: <BiSupport className="w-10 h-10 text-orange-600 mb-2" />,
      title: "Get in Touch",
      description: "If you're interested in partnering with us, we'd love to hear from you. Please contact us at info@travelsynergies.com to explore exciting partnership opportunities.",
    }
  ]

  return (
    <div className=" bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-8xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden py-12 px-4 min-h-screen items-center justify-center">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-orange-600 mb-6 text-center">Why Choose Travel Synergies?</h1>
        <p className="text-sm  text-center font-bold mt-2 md:mt-4 text-gray-800">
          At Travel Synergies, we are dedicated to crafting exceptional travel experiences that go beyond expectations.
        </p>


        <section className="my-6 md:my-12">
          <h2 className="text-lg md:text-2xl font-semibold text-orange-500 text-center">Our Key Offerings</h2>
          <div className="grid md:grid-cols-2 gap-6 pt-5">
            {WhyChoose.map((initiative, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-lg shadow-md grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-4 items-center min-h-[120px] text-center sm:text-left"
              >
                {/* Icon Section */}
                <div className="flex justify-center sm:justify-start">
                  <div className="h-10 w-10 flex items-center justify-center">
                    {initiative.icon}
                  </div>
                </div>

                {/* Text Content Section */}
                <div>
                  <h3 className="text-sm md:text-lg font-bold text-black">
                    {initiative.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600">
                    {initiative.description}
                  </p>
                </div>
              </div>


            ))}
          </div>

        </section>
      </div>
    </div>
  );
};

export default WhyChoosUsInbound;
