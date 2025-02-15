

const DiningExperiences = () => {
  return (
    <div className=" bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto bg-white text-gray-800 shadow-xl rounded-lg overflow-hidden p-4 ">
        <div className="p-6 md:p-10">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-orange-600 mb-6 text-center md:pt-16">
          Dining Experiences
          </h1>

          {/* Michelin-Starred Restaurants */}
          <div className="mb-10 max-w-7xl">
            <h2 className="text-lg md:text-xl  font-bold text-orange-500"> Fine Dining in the UAE: A Culinary Paradise</h2>
            <p className="text-sm mb-4">
            The UAE is a true gastronomic delight, offering an array of dining options that cater to every palate. From traditional Middle Eastern delicacies to innovative international cusines to fusion blends, the country boasts exceptional restaurants known for their quality, creativity and impeccable service. Here are a few of the high-end restaurants in the UAE, including some Michelin-starred options:
            </p>
          </div>
          <div className="mb-10 max-w-7xl">
            <h2 className="text-lg md:text-xl  font-bold text-orange-500">Michelin-Starred Restaurants</h2>
            <p className="text-sm mb-4">
              The UAE is home to several Michelin-starred restaurants, which have earned their prestigious stars for their outstanding cuisine, presentation and service. One such restaurant is Gordon Ramsay's Bread Street Kitchen & Bar, which has been awarded one Michelin star for its creative and expertly crafted dishes. Another restaurant, Pierre Gagnaire's Reflets, has also earned two Michelin stars for its exquisite cuisine and elegant atmosphere.
            </p>
          </div>

          {/* Luxury Dining Experiences */}
          <div className="mb-10 max-w-7xl">
            <h2 className="text-lg md:text-xl  font-bold text-orange-500">Luxury Dining Experiences</h2>
            <p className="text-sm mb-4">
              For a truly luxurious dining experience, head to one of the many high-end restaurants in the UAE. One such restaurant, At.mosphere where you can savor international dishes while enjoying unparalleled views of the Dubai city from the world’s tallest building. Another restaurant, Al Mallah in Dubai's Old Town, serves with modern twist on Middle Eastern cuisine, highlighting local ingredients and innovative presentations.


            </p>
          </div>

          {/* Unique Dining Concepts */}
          <div className="mb-10 max-w-7xl">
            <h2 className="text-lg md:text-xl  font-bold text-orange-500">Unique Dining Concepts</h2>
            <p className=" mb-4 text-sm">
              The UAE is also home to several unique dining concepts that offer something new and exciting. One such restaurant, The Dubai Mall's Din Tai Fung, serves traditional Taiwanese cuisine with a focus on fresh ingredients and expertly crafted dishes. Another restaurant, The Address Downtown Dubai's The Cigar Bar, offers a range of international dishes complemented by fine cigars and an exceptional wine selection. And one-of-a-kind experience for Dinner at the Burj Al Arab's Al Muntaha restaurant, where international cuisine is paired with spectacular views of Dubai’s skyline.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiningExperiences;
