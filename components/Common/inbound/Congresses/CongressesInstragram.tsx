import InboundImageCards from "../common/InboundImageCards"

const CongressesInstagram = () => {
    const CongressesInstagramPics=[
        {
            title: 'Gala Dinners            ',
            description: [
              'Create an unforgettable evening with our bespoke gala dinners. Featuring elegant décor, gourmet cuisine and exceptional service, we ensure every detail is handled meticulously. From themed settings to live entertainment, these evenings are curated to ensure your guests experience and unforgettable moment.',
      
            ],
            booknowDescription: 'So what are you waiting for? Book your amazing tour now and get ready for an unforgettable experience',
            imageUrl:"/inbound/Congress/Instagram/gala-dinner.png"
          },
          {
            title: 'Cocktail Receptions',
            description: [
              'Host cocktail receptions featuring exclusive beverages, signature canapés and an elegant ambiance. These gatherings are perfect for networking, celebrating milestones or simply unwinding.  ',
      
            ],
            booknowDescription: 'So what are you waiting for? Book your amazing tour now and get ready for an unforgettable experience',
            imageUrl:"/inbound/Congress/Instagram/cocktail.webp"
          },
          {
            title: 'Event Handling',
            description: [
              'EDazzle your attendees with tailored entertainment that aligns with your event’s theme. From live music and cultural performances to immersive shows and cutting-edge technology displays, we create captivating moments that leave your audience spellbound.',
      
            ],
            booknowDescription: 'So what are you waiting for? Book your amazing tour now and get ready for an unforgettable experience',
            imageUrl:"/inbound/Congress/Instagram/event-handling.webp"
          },
          {
            title: 'Workshops',
            description: [
              'Feel the exhilaration of high-speed action at Yas Marina Circuit. Take the driver’s seat for an unforgettable racing experience or enjoy the excitement of world-class motorsport events in this iconic venue.',
      
            ],
            booknowDescription: 'So what are you waiting for? Book your amazing tour now and get ready for an unforgettable experience',
            imageUrl:"/inbound/Congress/Instagram/workshop-planning.webp"
          },
          {
            title: 'Award Ceremonies',
            description: [
              'Celebrate achievements with a flawlessly executed award ceremony. From elegant stage setups and captivating audiovisual effects to seamless coordination, we create a memorable atmosphere that honors success and inspires excellence. ',
      
            ],
            booknowDescription: 'So what are you waiting for? Book your amazing tour now and get ready for an unforgettable experience',
            imageUrl:"/inbound/Congress/Instagram/award-ceremonies.webp"
          },
          {
            title: 'Exhibitions',
            description: [
              'Showcase your brand, products and services with expertly organized exhibitions. From innovative booth designs and promotions to seamless logistics, we ensure every detail is covered to deliver maximum impact.',
      
            ],
            booknowDescription: 'So what are you waiting for? Book your amazing tour now and get ready for an unforgettable experience',
            imageUrl:"/inbound/Congress/Instagram/exhibition-handling.webp"
          },
    ]
  return (
    <div className="w-full">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-5  mx-auto">
      {CongressesInstagramPics.map((card, index) => {
          return (
              <InboundImageCards
                  key={index}
                  imageUrl={card.imageUrl}
                  title={card.title}
                  description={card.description}
                  index={index}
                  bookNow={true}
                  booknowDescription={card.booknowDescription} />
          )
      })}
    </div>
  </div>
  )
}

export default CongressesInstagram
