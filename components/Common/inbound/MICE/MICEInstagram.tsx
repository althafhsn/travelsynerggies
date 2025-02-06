import InboundImageCards from "../common/InboundImageCards"

const MICEInstagram = () => {
    const MICEInstagramPics=[
        {
            title: 'Regattas',
            description: [
              'Set sail on a thrilling regatta experience, where teams navigate pristine waters in a race that combines strategy, teamwork and adventure.',
      
            ],
            booknowDescription: 'So what are you waiting for? Book your amazing tour now and get ready for an unforgettable experience',
            imageUrl:"/inbound/MICE/Instagram/regatta.webp"
          },
          {
            title: 'Belly Dancing classes',
            description: [
              'Immerse yourself in the rhythm of the Middle East with belly dancing classes. Learn the graceful movements, traditional techniques and the rhythm behind this captivating dancing form.  ',
      
            ],
            booknowDescription: 'So what are you waiting for? Book your amazing tour now and get ready for an unforgettable experience',
            imageUrl:"/inbound/MICE/Instagram/belly-dancing-classes.webp"
          },
          {
            title: 'Polo',
            description: [
              'Experience the refined elegance of polo. From participating in private lessons or attending live matches, enjoy an exclusive glimpse into this dynamic and sophisticated sport.',
      
            ],
            booknowDescription: 'So what are you waiting for? Book your amazing tour now and get ready for an unforgettable experience',
            imageUrl:"/inbound/MICE/Instagram/polo.webp"
          },
          {
            title: 'Racing at Yas Marina',
            description: [
              'Feel the exhilaration of high-speed action at Yas Marina Circuit. Take the driver’s seat for an unforgettable racing experience or enjoy the excitement of world-class motorsport events in this iconic venue.',
      
            ],
            booknowDescription: 'So what are you waiting for? Book your amazing tour now and get ready for an unforgettable experience',
            imageUrl:"/inbound/MICE/Instagram/racing-at-yas-marina.webp"
          },
          {
            title: 'Entertainment',
            description: [
              'Bring your events to life with tailored entertainment options, including live music, cultural performances, and dazzling shows. From intimate gatherings to grand galas, we ensure your guests are thoroughly captivated.',
      
            ],
            booknowDescription: 'So what are you waiting for? Book your amazing tour now and get ready for an unforgettable experience',
            imageUrl:"/inbound/MICE/Instagram/entertainment.webp"
          },
          {
            title: 'VIP Access',
            description: [
              'Experience the unmatched exclusivity with VIP access to premium facilities. Enjoy priority entry, luxury lounges and customized services, making every moment truly extraordinary.',
      
            ],
            booknowDescription: 'So what are you waiting for? Book your amazing tour now and get ready for an unforgettable experience',
            imageUrl:"/inbound/MICE/Instagram/VIP-access.webp"
          },
    ]
  return (
    <div className="w-full">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-5  mx-auto">
      {MICEInstagramPics.map((card, index) => {
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

export default MICEInstagram
