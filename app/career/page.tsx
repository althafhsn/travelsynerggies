"use client"
import React from "react";
import { FaUsers, FaGlobe, FaBalanceScale, FaLightbulb, FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";


interface CareerOpportunityProps {
  title: string;
  description: string;

  moreDetailsLink: string;
  applyLink: string;
}

const CareerOpportunity: React.FC<CareerOpportunityProps> = ({
  title,
  description,

  moreDetailsLink,
  applyLink,
}) => {
  return (
    <div className="bg-gray-200 rounded-lg shadow-md p-6 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="flex items-center justify-between  mt-4">
        <div className="flex gap-3">

          <span
            className='px-3 py-1 rounded-full text-sm font-medium text-green-100 bg-green-500'

          >
            Full Time
          </span>
          <span
            className='px-3 py-1 rounded-full text-sm font-medium text-blue-100 bg-blue-500'
          >
            Remote
          </span>
        </div>
        <div className="flex gap-2">

          <a href={moreDetailsLink}
            className="bg-orange-500 hover:bg-orange-600 hover:scale-105 ease-in-out transition-all duration-300  text-white px-4 py-2 rounded-md"
          >
            More Details
          </a>

          <a href={applyLink}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md  hover:scale-105 ease-in-out transition-all duration-300"
          >
            Apply Now
          </a>
        </div>
      </div >
    </div >
  );
};

// Define an array of career opportunities
const careerOpportunities = [
  {
    icon: <FaUsers className="text-4xl mx-auto mb-4" />,
    title: "Passionate Team",
    description: "Join a team of travel enthusiasts dedicated to providing exceptional service and creating unforgettable experiences for our customers.",
  },
  {
    icon: <FaGlobe className="text-4xl mx-auto mb-4" />,
    title: "Opportunities",
    description: "With our global presence, collaborate with colleagues worldwide on exciting projects.",
  },
  {
    icon: <FaBalanceScale className="text-4xl mx-auto mb-4" />,
    title: "Work-Life Balance",
    description: "Thrive in a supportive environment that values your personal and professional well-being.",
  },
  {
    icon: <FaLightbulb className="text-4xl mx-auto mb-4" />,
    title: "Innovative Environment",
    description: "Be part of a company embracing innovation with cutting-edge technology and immersive experiences.",
  },
  {
    icon: <FaChartLine className="text-4xl mx-auto mb-4" />,
    title: "Professional Growth",
    description: "Access training, development programs, and opportunities to reach your full potential.",
  },
];

const Careers: React.FC = () => {

  const opportunities: CareerOpportunityProps[] = [
    {
      title: 'Travel Designers',
      description:
        " Are you a natural at planning and organizing? Join our team of travel consultants and help our customers turn their travel dreams into reality. Whether it's a luxury getaway, an adventurous expedition, or a relaxing beach vacation, you'll use your expertise to create personalized itineraries that exceed expectations.",

      moreDetailsLink: '#',
      applyLink: '#',
    },
    {
      title: 'Marketing Specialists',
      description:
        "Are you creative, strategic and passionate about travel? Join our marketing team and help us spread the word about our amazing destination experiences. From social media campaigns to content creation, you'll play a key role in inspiring our partners and driving engagement with our brand.",

      moreDetailsLink: '#',
      applyLink: '#',
    },
    {
      title: 'Customer Service Representatives',
      description:
        "Do you have a knack for providing exceptional service and solving problems? Join our partners and help ensure that every aspect of our customers' journey - from booking to departure - is seamless and stress - free.Whether it's answering inquiries, resolving issues, or assisting with travel arrangements, you'll be the friendly voice our partners rely on.",
      moreDetailsLink: '#',
      applyLink: '#',
    },
  ];
  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-start justify-center text-white bg-bg-career min-h-[70vh] bg-cover">
        <div className="container max-w-7xl mx-auto">
          <motion.h1
            className="text-xl font-bold font-sans mb-4 text-orange-500"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Join Our Team
          </motion.h1>
          <motion.h2
            className="text-5xl mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Embark on a journey with <br />
            <span className="font-semibold">Travel Synergies</span>.
          </motion.h2>
          <Link href='#career-application'>

            <button className="text-white bg-orange-500 py-2 px-4 rounded shadow hover:bg-orange-700 hover:text-gray-100 transition-all duration-300 ease-in-out text-sm md:text-lg">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
      <div className="my-4 container max-w-7xl mx-auto">
        <h2 className="text-lg text-green-800 py-4 text-center">
          Are you passionate about travel and eager to explore the world? Do you thrive in a dynamic, fast-paced environment where every day brings new adventures? If so, Travel Synergies invites you to join our team and be part of an exciting journey!
        </h2>

        <p className="text-sm text-gray-100">
          At Travel Synergies, we believe that travel has the power to transform lives, broaden horizons, and create unforgettable memories. As a leading player in the travel industry, we specialize in curating unique and immersive experiences for our customers, ensuring that every journey is as extraordinary as the destinations themselves.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center text-white container max-w-7xl mx-auto py-10">
        {/* Map through the career opportunities array */}
        {careerOpportunities.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-xl bg-opacity-10 backdrop-blur-lg bg-gray-400  text-orange-500 hover:scale-105 transition-all duration-300 ease-in-out cursor-grabbing shadow-lg"
          >
            {item.icon}
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-100">{item.description}</p>
          </div>
        ))}
      </div>

      <div className=" py-12 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 mx-auto text-center">Career Opportunities</h2>
          <div className="grid  gap-6">
            {opportunities.map((opportunity, index) => (
              <CareerOpportunity key={index} {...opportunity} />
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8">

        <div className=" bg-gradient-to-b from-orange-300 to-black rounded-md  ">
          <form className="md:col-span-8 p-10">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name" type="text" placeholder="Jane" />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name" type="text" placeholder="Doe" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name" type="email" placeholder="example@gmail.com" />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Phone No
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name" type="text" placeholder="" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mx-auto">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Job
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name" type="email" placeholder="Devoloper...." />
              </div>
            </div>

            <div className="w-full py-9 bg-gray-50 rounded border border-gray-300 gap-3 grid ">
              <div className="grid gap-1">
                <svg className="mx-auto" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="File">
                    <path id="icon" d="M31.6497 10.6056L32.2476 10.0741L31.6497 10.6056ZM28.6559 7.23757L28.058 7.76907L28.058 7.76907L28.6559 7.23757ZM26.5356 5.29253L26.2079 6.02233L26.2079 6.02233L26.5356 5.29253ZM33.1161 12.5827L32.3683 12.867V12.867L33.1161 12.5827ZM31.8692 33.5355L32.4349 34.1012L31.8692 33.5355ZM24.231 11.4836L25.0157 11.3276L24.231 11.4836ZM26.85 14.1026L26.694 14.8872L26.85 14.1026ZM11.667 20.8667C11.2252 20.8667 10.867 21.2248 10.867 21.6667C10.867 22.1085 11.2252 22.4667 11.667 22.4667V20.8667ZM25.0003 22.4667C25.4422 22.4667 25.8003 22.1085 25.8003 21.6667C25.8003 21.2248 25.4422 20.8667 25.0003 20.8667V22.4667ZM11.667 25.8667C11.2252 25.8667 10.867 26.2248 10.867 26.6667C10.867 27.1085 11.2252 27.4667 11.667 27.4667V25.8667ZM20.0003 27.4667C20.4422 27.4667 20.8003 27.1085 20.8003 26.6667C20.8003 26.2248 20.4422 25.8667 20.0003 25.8667V27.4667ZM23.3337 34.2H16.667V35.8H23.3337V34.2ZM7.46699 25V15H5.86699V25H7.46699ZM32.5337 15.0347V25H34.1337V15.0347H32.5337ZM16.667 5.8H23.6732V4.2H16.667V5.8ZM23.6732 5.8C25.2185 5.8 25.7493 5.81639 26.2079 6.02233L26.8633 4.56274C26.0191 4.18361 25.0759 4.2 23.6732 4.2V5.8ZM29.2539 6.70608C28.322 5.65771 27.7076 4.94187 26.8633 4.56274L26.2079 6.02233C26.6665 6.22826 27.0314 6.6141 28.058 7.76907L29.2539 6.70608ZM34.1337 15.0347C34.1337 13.8411 34.1458 13.0399 33.8638 12.2984L32.3683 12.867C32.5216 13.2702 32.5337 13.7221 32.5337 15.0347H34.1337ZM31.0518 11.1371C31.9238 12.1181 32.215 12.4639 32.3683 12.867L33.8638 12.2984C33.5819 11.5569 33.0406 10.9662 32.2476 10.0741L31.0518 11.1371ZM16.667 34.2C14.2874 34.2 12.5831 34.1983 11.2872 34.0241C10.0144 33.8529 9.25596 33.5287 8.69714 32.9698L7.56577 34.1012C8.47142 35.0069 9.62375 35.4148 11.074 35.6098C12.5013 35.8017 14.3326 35.8 16.667 35.8V34.2ZM5.86699 25C5.86699 27.3344 5.86529 29.1657 6.05718 30.593C6.25217 32.0432 6.66012 33.1956 7.56577 34.1012L8.69714 32.9698C8.13833 32.411 7.81405 31.6526 7.64292 30.3798C7.46869 29.0839 7.46699 27.3796 7.46699 25H5.86699ZM23.3337 35.8C25.6681 35.8 27.4993 35.8017 28.9266 35.6098C30.3769 35.4148 31.5292 35.0069 32.4349 34.1012L31.3035 32.9698C30.7447 33.5287 29.9863 33.8529 28.7134 34.0241C27.4175 34.1983 25.7133 34.2 23.3337 34.2V35.8ZM32.5337 25C32.5337 27.3796 32.532 29.0839 32.3577 30.3798C32.1866 31.6526 31.8623 32.411 31.3035 32.9698L32.4349 34.1012C33.3405 33.1956 33.7485 32.0432 33.9435 30.593C34.1354 29.1657 34.1337 27.3344 34.1337 25H32.5337ZM7.46699 15C7.46699 12.6204 7.46869 10.9161 7.64292 9.62024C7.81405 8.34738 8.13833 7.58897 8.69714 7.03015L7.56577 5.89878C6.66012 6.80443 6.25217 7.95676 6.05718 9.40704C5.86529 10.8343 5.86699 12.6656 5.86699 15H7.46699ZM16.667 4.2C14.3326 4.2 12.5013 4.1983 11.074 4.39019C9.62375 4.58518 8.47142 4.99313 7.56577 5.89878L8.69714 7.03015C9.25596 6.47133 10.0144 6.14706 11.2872 5.97592C12.5831 5.8017 14.2874 5.8 16.667 5.8V4.2ZM23.367 5V10H24.967V5H23.367ZM28.3337 14.9667H33.3337V13.3667H28.3337V14.9667ZM23.367 10C23.367 10.7361 23.3631 11.221 23.4464 11.6397L25.0157 11.3276C24.9709 11.1023 24.967 10.8128 24.967 10H23.367ZM28.3337 13.3667C27.5209 13.3667 27.2313 13.3628 27.0061 13.318L26.694 14.8872C27.1127 14.9705 27.5976 14.9667 28.3337 14.9667V13.3667ZM23.4464 11.6397C23.7726 13.2794 25.0543 14.5611 26.694 14.8872L27.0061 13.318C26.0011 13.1181 25.2156 12.3325 25.0157 11.3276L23.4464 11.6397ZM11.667 22.4667H25.0003V20.8667H11.667V22.4667ZM11.667 27.4667H20.0003V25.8667H11.667V27.4667ZM32.2476 10.0741L29.2539 6.70608L28.058 7.76907L31.0518 11.1371L32.2476 10.0741Z" fill="#ff9800" />
                  </g>
                </svg>
                <h2 className="text-center text-gray-400   text-xs leading-4">PNG, JPG or PDF, smaller than 15MB</h2>
              </div>
              <div className="grid gap-2">
                <h4 className="text-center text-gray-900 text-sm font-medium leading-snug">Drag and Drop your file here or</h4>
                <div className="flex items-center justify-center">
                  <label>
                    <input type="file" hidden />
                    <div className="flex w-28 h-9 px-2 flex-col bg-orange-500 hover:bg-orange-600 rounded-full shadow text-white text-xs font-semibold leading-4 items-center justify-center cursor-pointer focus:outline-none">Choose File</div>
                  </label>
                </div>
              </div>
            </div>


            <div className="flex flex-wrap -mx-3 my-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
                >
                  Your Message
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></textarea>
              </div>
              <div className="flex justify-between w-full px-3">
                <div className="md:flex md:items-center">
                  <label className="block text-gray-500 font-bold">
                    <input className="mr-2 leading-tight" type="checkbox" />
                    <span className="text-sm text-white">
                      Send me your newsletter!
                    </span>
                  </label>
                </div>
                <button
                  className="shadow bg-orange-500 rounded-full hover:bg-orange-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 "
                  type="submit">
                  Send Message
                </button>
              </div>

            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Careers;
