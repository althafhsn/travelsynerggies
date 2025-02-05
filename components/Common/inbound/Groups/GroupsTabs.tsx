import InboundImageCards from "../common/InboundImageCards"


const GroupsTabs = () => {
  const GroupInstangram = [
    {
      title: 'Desert Safari with BBQ dinner',
      description: [
        'Embark on an unforgettable desert adventure, featuring thrilling dune bashing, serene camel rides and captivating fires shows. Conclude your journey with a traditional Bedouin-style evening under the stars, complete with cultural performances and a delicious Arabian feast.',

      ],
      booknowDescription: 'So what are you waiting for? Book your amazing tour now and get ready for an unforgettable experience',
      imageUrl: "/inbound/Groups/Instagram/desert-safari-with-BBQ-dinner.webp"
    },
    {
      title: 'Sand Skiing ',
      description: [
        'Experience the thrill of sand skiing on Dubai’s golden dunes as you glide down towering sand hills on a surfboard for an adrenaline-pumping adventure. Surrounded by breathtaking desert landscapes, this is a fun filled activity for anyone who likes to down a slope.',

      ],
      booknowDescription: 'So what are you waiting for? Book your amazing tour now and get ready for an unforgettable experience',
      imageUrl: "/inbound/Groups/Instagram/sand-skiing.webp"
    },
    {
      title: 'Yachting',
      description: [
        'Sail in luxury along the UAE’s pristine waters, with exclusive yachts offering panoramic views of iconic skyline of the city, vibrant coastlines and beautiful sunsets. Enjoy tailored experiences, from private dining to water sports adventures.',

      ],
      booknowDescription: 'So what are you waiting for? Book your amazing tour now and get ready for an unforgettable experience',
      imageUrl: "/inbound/Groups/Instagram/Yachting.webp"
    },
    {
      title: 'Cultural Visits',
      description: [
        "Immerse yourself in the UAE's rich heritage with visits to grand mosques, historic forts and vibrant souks. Explore museums, art galleries and cultural villages that reveal the traditions and culture that define the regio."

      ],
      booknowDescription: 'So what are you waiting for? Book your amazing tour now and get ready for an unforgettable experience',
      imageUrl: "/inbound/Groups/Instagram/cultural-visits.webp"
    },
    {
      title: 'Educational Programs',
      description: [
        'Participate in engaging educational programs that provide unique insights into the UAE’s history, architecture, lifestyle, workforces, sustainability efforts and cultural diversity.',

      ],
      booknowDescription: 'So what are you waiting for? Book your amazing tour now and get ready for an unforgettable experience',
      imageUrl: "/inbound/Groups/Instagram/education-programs.webp"
    },
    {
      title: 'Hot Air Balloons',
      description: [
        "Soar at sunrise in a majestic hot air balloon, witnessing the desert’s golden dunes and the iconic landmarks from above. A serene and breathtaking way to experience the UAE's aerial beauty",

      ],
      booknowDescription: 'So what are you waiting for? Book your amazing tour now and get ready for an unforgettable experience',
      imageUrl: "/inbound/Groups/Instagram/hot-air-balooning.webp"
    },
  ]
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-5  mx-auto">
        {GroupInstangram.map((card, index) => (
          <InboundImageCards
            key={index}
            imageUrl={card.imageUrl}
            title={card.title}
            description={card.description}
            index={index}
            bookNow={true}
            booknowDescription={card.booknowDescription}
          />
        ))}
      </div>
    </div>
  )
}

export default GroupsTabs
