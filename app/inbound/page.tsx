import InboundImageCards from '@/components/Common/inbound/InboundImageCards'
import React from 'react'



const page = () => {

  const abuDabi = [
    {
      title: 'Abu Dhabi Golf course',
      description: ['Total of 27 holes comprising of 02 courses.',
        'The National course.It’s a 18 holes, Par 72 and measures 7440 yards championship course with 05 tee options with lush fairways, strategically placed bunkers and immaculate greens, the course has been described as a “super course” by leading representatives of the golfing press.Host for HSBC European Tournament for past 14 yrs.',
        ' The Garden course & night golf.The 3, 299 - yard, par - 36 nine is more forgiving, making it an enjoyable experience for all players, especially those new to the game.'],
      imageUrl: '/blog/blog12.webp',
      facilitiesOnSiteArea: [
        'Restaurant , Pool bar & Café lounge',
        'Golf Academy',
        ' Golf Shop'
      ]
    },
    {
      title: 'Abu Dhabi Golf course',
      description: ['Total of 27 holes comprising of 02 courses.',
        'The National course.It’s a 18 holes, Par 72 and measures 7440 yards championship course with 05 tee options with lush fairways, strategically placed bunkers and immaculate greens, the course has been described as a “super course” by leading representatives of the golfing press.Host for HSBC European Tournament for past 14 yrs.',
        ' The Garden course & night golf.The 3, 299 - yard, par - 36 nine is more forgiving, making it an enjoyable experience for all players, especially those new to the game.'],
      imageUrl: '/blog/blog12.webp',
      facilitiesOnSiteArea: [
        'Restaurant , Pool bar & Café lounge',
        'Golf Academy',
        ' Golf Shop'
      ]
    }
  ]
  return (
    <div className='lex flex-wrap justify-center  xl:mt-0'>
      {abuDabi.map((card, index) => (
        <InboundImageCards imageUrl={card.imageUrl} title={card.title} description={card.description}
          designedBy='gf,bn'
          facilitiesOnSiteArea={card.facilitiesOnSiteArea} index={index}
        />
      ))}

    </div>
  )
}

export default page
