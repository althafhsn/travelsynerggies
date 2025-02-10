import Image from 'next/image';
import { IoIosPeople } from "react-icons/io";
import { MdPlayArrow } from "react-icons/md";
import { FaSuitcase } from "react-icons/fa";

export default function Community() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-2 md:py-6 lg:py-8 bg-black text-white">
      {/* Education Section */}
      <div className="p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg mb-6 sm:mb-8">
        <h2 className="text-md sm:text-2xl lg:text-3xl font-bold text-orange-500 mb-4 ">
          <IoIosPeople className='inline-block mr-2 text-orange-500' /> Empower Through Education: Our Book and Stationery Donation Drive
        </h2>
        <div className="items-center gap-4 md:gap-6 lg:gap-8 mb-4 md:mb-6 lg:mb-10">
          <Image
            src="/social-responsibilty/Feed-the-fhildren.webp"
            alt="Children smiling"
            width={1000}
            height={250}
            className="rounded-lg object-cover w-full"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div>
            <Image
              src="/social-responsibilty/childrens-education.webp"
              alt="Children smiling"
              width={550}
              height={250}
              className="rounded-lg h-auto md:w-[600px]"
            />
          </div>
          <div className="flex flex-col justify-center p-4">
            <p className=" text-sm lg:text-lg mb-4 text-justify">
              Our book donation CSR initiative aims to make a positive impact on education through our Book and Stationery Donation Drive. We believe in the transformative power of education and are committed to providing essential tools for learning to those in need.
            </p>
            <p className=" text-sm lg:text-lg mb-4 text-justify">
              Books and Stationery are fundamental to the learning experience. Unfortunately, many individuals, particularly in underserved communities, lack access to these basic resources. By donating books and stationery items, we aim to bridge this gap and provide the necessary support for a brighter future. We have provided over 100 children in Sri Lanka with stationery supplies and uniforms, ensuring they have the necessary tools for their education.
            </p>
          </div>
        </div>
      </div>

      {/* Volunteerism Section */}
      <div className="p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-500 mb-4 ">
          <MdPlayArrow className='inline-block mr-2 text-orange-500' /> Employee Volunteerism
        </h2>
        <div className="grid grid-cols-1 gap-6 md:gap-10 mb-4 md:mb-6">
          <div>
            <p className="text-xs sm:text-sm lg:text-base text-center">
              Our employees are at the heart of our CSR efforts. We encourage active participation in community service and volunteer programs to make a meaningful impact.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
            <Image
              src="/social-responsibilty/clean-up-crew.webp"
              alt="Employees volunteering"
              width={650}
              height={350}
              className="rounded-lg md:w-[600px] h-auto"
            />
            <Image
              src="/social-responsibilty/let-plant-a-tree.webp"
              alt="Community service"
              width={650}
              height={350}
              className="rounded-lg md:w-[600px] h-auto"
            />
          </div>
        </div>
      </div>

      {/* Ethical Business Conduct */}
      <div className="p-4 md:p-6 lg:p-8 rounded-lg shadow-lg mb-6 md:mb-8">
        <h2 className="text-md sm:text-2xl lg:text-3xl font-bold text-orange-500 mb-4 ">
          <FaSuitcase className='inline-block mr-2 text-orange-500' /> Ethical Business Conduct
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 sm:gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 sm:gap-6 p-4 sm:p-6 bg-black rounded-lg shadow-md">
            <Image
              src="/social-responsibilty/labour.webp"
              width={250}
              height={500}
              alt="Ethical Business Conduct"
              className="rounded-lg w-full h-auto"
            />
            <div>
              <h3 className="font-semibold text-orange-500 mb-2">
                <MdPlayArrow className='inline-block mr-2 text-orange-500' /> Fair Labour Practices
              </h3>
              <p className="text-white text-xs sm:text-sm lg:text-base text-justify">
                We adhere to fair labor standards and ensure safe working conditions for our employees and partners, including fair wages, equal opportunities, and respect for human rights.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-6 p-4 md:p-6 bg-black rounded-lg shadow-md">
            <div>
              <h3 className="font-semibold text-orange-500 mb-2">
                <MdPlayArrow className='inline-block mr-2 text-orange-500' /> Transparency and Accountability
              </h3>
              <p className="text-white text-xs sm:text-sm lg:text-base text-justify">
                We maintain open communication channels with stakeholders, regularly reporting on our CSR initiatives, performance, and progress towards our goals. At Travel Synergies, we recognize that our success is intertwined with the well-being of the planet and its people. Through our commitment to Corporate Social Responsibility, we aim to create a positive impact that extends far beyond the borders of our destinations.
              </p>
            </div>
            <Image
              src="/social-responsibilty/transprancy.webp"
              width={250}
              height={500}
              alt="transparancy and accountability"
              className="rounded-lg  w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <p className="text-center mt-6 sm:mt-8 italic text-xs sm:text-sm lg:text-base">
        Join us in our journey towards a more sustainable and inclusive future for all!
      </p>
    </div>
  );
}