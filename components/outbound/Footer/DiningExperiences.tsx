

const DiningExperiences = () => {
  return (
    <div className=" bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto bg-white text-gray-800 shadow-xl rounded-lg overflow-hidden p-4 ">
        <div className="p-6 md:p-10">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-orange-600 mb-6 text-center md:pt-16">
            Fine Dining in the UAE: A Culinary Paradise
          </h1>
          <p className="text-sm font-bold  mx-auto text-black p-2">
            The UAE is a true gastronomic delight, offering an array of dining options that cater to every palate. From traditional Middle Eastern delicacies to innovative international cuisines to fusion blends, the country boasts exceptional restaurants known for their quality, creativity, and impeccable service.
          </p>

          {/* Michelin-Starred Restaurants */}
          <div className="mb-10 max-w-7xl">
            <h2 className="text-lg md:text-xl  font-bold text-orange-500">Michelin-Starred Restaurants</h2>
            <p className="text-sm mb-4">
              The UAE is home to several Michelin-starred restaurants, which have earned their prestigious stars for their outstanding cuisine, presentation, and service.
            </p>
            <ul className="list-disc list-inside space-y-3 text-sm">
              <li>
                <span className="font-semibold">Gordon Ramsay's Bread Street Kitchen & Bar</span> - Awarded one Michelin star for its creative and expertly crafted dishes.
              </li>
              <li>
                <span className="font-semibold">Pierre Gagnaire's Reflets</span> - Earned two Michelin stars for its exquisite cuisine and elegant atmosphere.
              </li>
            </ul>
          </div>

          {/* Luxury Dining Experiences */}
          <div className="mb-10 max-w-7xl">
            <h2 className="text-lg md:text-xl  font-bold text-orange-500">Luxury Dining Experiences</h2>
            <p className="text-sm mb-4">
              For a truly luxurious dining experience, head to one of the many high-end restaurants in the UAE.
            </p>
            <ul className="list-disc list-inside space-y-3 text-sm">
              <li>
                <span className="font-semibold">At.mosphere</span> - Enjoy international dishes while savoring unparalleled views of Dubai from the world’s tallest building.
              </li>
              <li>
                <span className="font-semibold">Al Mallah</span> - Located in Dubai's Old Town, this restaurant serves a modern twist on Middle Eastern cuisine, highlighting local ingredients and innovative presentations.
              </li>
            </ul>
          </div>

          {/* Unique Dining Concepts */}
          <div className="mb-10 max-w-7xl">
            <h2 className="text-lg md:text-xl  font-bold text-orange-500">Unique Dining Concepts</h2>
            <p className=" mb-4 text-sm">
              The UAE is also home to several unique dining concepts that offer something new and exciting.
            </p>
            <ul className="list-disc list-inside space-y-3 text-sm">
              <li>
                <span className="font-semibold">Din Tai Fung</span> - Located at The Dubai Mall, serves traditional Taiwanese cuisine with a focus on fresh ingredients and expertly crafted dishes.
              </li>
              <li>
                <span className="font-semibold">The Cigar Bar</span> - Found at The Address Downtown Dubai, offers a range of international dishes complemented by fine cigars and an exceptional wine selection.
              </li>
              <li>
                <span className="font-semibold">Al Muntaha</span> - A one-of-a-kind experience at Burj Al Arab, where international cuisine is paired with spectacular views of Dubai’s skyline.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiningExperiences;
