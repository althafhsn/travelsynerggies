import { m } from 'framer-motion';
import React, { useState } from 'react';
import { GoDotFill } from 'react-icons/go';

const SafetyGuidelinesBlog: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>('personal-security');

    const sections = [
        {
            id: 'personal-security',
            title: 'Personal Security',
            content: [
                'Some countries do unfortunately have issues with crime and security, and visitors may be viewed as an easy target. Most street crime is opportunistic, so you should take care with valuables when walking around.',
                'Avoid flaunting items such as cameras and phones, and keep bags close to you and securely fastened at all times. Be aware of distraction techniques such as someone spilling drinks or ice cream on you then offering to clean it up.',
                'We recommend that jewellery and expensive watches are left at home. Make use of the hotel safe for passports and money, but always keep a photocopy or digital photograph of your passport in a separate place.',
                'Always listen to the advice of your guides and to the hotel staff. This is particularly important if you’ll be exploring on your own or going out at night. Local advice is always the best source of information for knowing which areas are safe to visit, the best way of getting there, and which taxis or other transport options to use.',
                'While the chances of being caught up in a terrorist attack remain extremely low, no destination can be guaranteed completely safe. Be vigilant in crowded public places, particularly those that are popular with visitors.',
                'Follow local and government advice during significant religious occasions and avoid demonstrations or large gatherings of a political nature.'

            ]
        },
        {
            id: 'activities',
            title: 'Activities',
            content: [
                'The local safety standards that apply to activities you undertake while away may not always be the same as they would in your home country, or they might not be subject to any regulation at all. Always follow instructions and wear masks, life jackets, and helmets, where appropriate — ask for them if they’re not automatically made available. Don’t participate if you have any concerns about safety, and report your concerns to us as soon as possible.',
                'If your trip involves activities specifically designed for animal observation, or if you encounter wildlife while out walking, please remember that these animals are wild and can be unpredictable. Be cautious in all situations, don’t attempt to feed or touch the animals, and respect their space.'
            ]
        },
        {
            id: 'vehicles',
            title: 'Vehicles & Driving',
            content: [
                'We insist on our suppliers using a high standard of vehicles and drivers, and that they implement appropriate health and hygiene protocols to keep you and their staff safe. If you’re unhappy about any aspect of the vehicle or the standard of driving, please advise the driver, guide, our local agent, or us immediately',
                'Please be aware that in many of the countries, it’s legally required to have seat belts fitted in the back of vehicles. We ask our suppliers to use vehicles that have rear seat belts whenever possible, but this can’t always be guaranteed.',
                'If you’re renting a car and driving yourself, please ask about local speed limits and traffic laws before setting off. These are likely to be different to [than] those in your home country and can even vary within the same destination where traffic rules are governed by state or provincial laws rather than national laws. Always obey the speed limits, do not drink and drive, and plan your journey carefully to avoid driving at night.'
            ]
        },
        {
            id: 'road-safety',
            title: 'Road Safety',
            content: [
                'When on foot, be careful crossing roads, particularly in cities. Traffic might not stop as a matter of course at pedestrian crossings and may be coming from an unfamiliar direction.',
                'When you arrive in a hotel, take a moment to acquaint yourself with the procedures in case of a fire, including your escape routes and the nearest fire exit. Carbon monoxide (CO) is invisible and has no taste or smell. It’s extremely poisonous and can be fatal, even at low levels. Gas-powered appliances such as stoves, fires, and boilers, paraffin heaters and solid-fuel heaters, wood burners, and open fires are all capable of producing carbon monoxide if they’re not installed properly and maintained, or if flues and chimneys aren’t kept clear.',
                'A yellow or orange flame in a gas appliance is a possible sign of incomplete combustion, meaning that carbon monoxide could be present. A healthy flame should be crisp, vibrant, and blue. Never use barbecues or burn charcoal indoors.',
                'Symptoms of carbon monoxide poisoning can easily be confused with flu or consumption of excess alcohol: headaches, nausea, dizziness, and general lethargy. Severe poisoning makes the body change to a cherry red colour. If you suspect that you or a companion is suffering from carbon monoxide poisoning, get out into the fresh air quickly and call for medical help.',
                'Consider travelling with a portable carbon monoxide alarm. These are easily and cheaply available at hardware stores or online. It’s important to choose an alarm that will wake you up if you’re asleep.'
            ]
        },
        {
            id: 'food-water',
            title: 'Food & Water Hygiene',
            content: [
                'Poor hygiene and sanitation are, unfortunately, prevalent in some parts of the world. Following a few simple rules will help to reduce the risk of travellers’ diarrhoea, as the key to prevention lies in taking effective food and water precautions and maintaining good personal hygiene.Do not drink tap water, or use it for brushing teeth, unless it has been boiled, filtered, or chemically disinfected. Use a refillable water bottle with a filter or, if necessary, bottled water. ',
                'Additionally, avoid ice cubes unless you’re sure they’ve been made with clean water. The same applies to salads and raw vegetables — these are easily contaminated by soil and may not have been washed in clean water. Eat fruit that can be peeled.',
                'All hot food should be served piping hot and not left exposed to the air for any length of time. Avoid leftovers or anything that appears to have been reheated.',
                'Eating local street food can be a highlight of travel in some countries. We suggest you follow the advice of your guide, who’ll be able to recommend the best vendors. Choose food that’s freshly cooked to a high temperature and served immediately while still hot.',
                'Always wash your hands before handling or eating food, and after using the toilet. If handwashing facilities are inadequate, it’s prudent to carry sanitising gel or hand wipes.If you’re unlucky and do suffer from diarrhoea, rehydrate yourself with clean fluids and oral rehydration solution. Seek medical attention if symptoms are severe or don’t resolve after a few days.'
            ]
        },
        {
            id: 'altitude',
            title: 'Altitude Sickness',
            content: [
                'Many popular travel areas, particularly in South America and the Himalaya, are located at high altitude, where the air pressure is lower than at sea level. Although the amount of oxygen in the air remains constant, the amount of oxygen in the lungs and bloodstream is reduced.The human body can generally adjust to high altitude, and the majority of visitors have a trouble-free time, but this process can take several days and will vary between individuals. Altitude sickness is more likely to occur in those who haven’t allowed sufficient time to adjust or who arrive directly into an area of high altitude (for example Cuzco in Peru, at 3,300 m [10,825 ft]).',
                'Anyone can suffer, regardless of age or fitness. Most people will notice some symptoms of hypoxia (lack of oxygen), including breathlessness and an increased heart rate. Other symptoms include headaches, difficulty sleeping, vivid dreams, and lack of appetite. In a minority of cases, some people may go on to develop more acute symptoms such as severe headaches, nausea, and dizziness.',
                'To reduce your chances of developing altitude sickness, you should take things slowly on arrival, get plenty of fresh air, keep well hydrated, and avoid alcohol, smoking, or rich food.Painkillers, such as paracetamol and ibuprofen, can be taken to relieve headaches. There are medicines you can use to prevent symptoms of altitude sickness, but these shouldn’t be used without proper medical advice.',
                'In South America, you’re often offered coca tea as a local remedy. This is a popular drink, but you should be aware that the leaves are often not produced under hygienic conditions. Also, due to the altitude, the water may not have reached boiling point for a sufficient period of time so may not be fully purified. Don’t be tempted to take coca tea bags or coca leaves out of the country, as it’s illegal to import these into the UK, the US, and many other countries. Coca tea is also a stimulant, so don’t drink it at night.'
            ]

        },
        {
            id: 'sun',
            title: 'Sun Exposure',
            content: [
                'The safest way to enjoy the sun and protect your skin is through a combination of clothing, sunscreen use, and seeking shade at the hottest times of day. Pack plenty of high-factor sunscreen, a wide-brimmed hat, long-sleeved tops, and sunglasses.',
                'Be aware that the risk of sunburn is greater at high altitudes. Also, UV light is reflected from water, white sand, and snow. If you’re snorkelling or swimming for long periods, it’s a good idea to wear a T-shirt and shorts.'
            ]
        },
        {
            id: 'medical',
            title: 'Medical',
            content: [
                'Before embarking on travel you should ensure that you have planned carefully so your health can be maintained throughout the trip and your travel insurance covers you for the destinations you’ll travel to, the activities you plan to undertake, and for any pre-existing medical conditions. If necessary, arrange a pre-trip medical with your doctor or nurse. This can be helpful if you have to take medication at certain times of day, as travel and time differences can cause disruption.',
                'If you take medication, you should bring enough to see you through the trip and allow for possible delays. If you require a fridge in your room to keep medication cold, please request this in advance. Always keep medicines in your hand luggage.',
                'You should be aware that, while medicines may be legal for use in their own country, regulations may be different overseas. It’s strongly recommended that you travel with a copy of your prescription and the original packaging. Do bear in mind airline restrictions on taking liquids as hand luggage. These are usually waived for medicines, but you’ll have to provide the relevant supporting documentation. For further information about carrying medicine abroad, we recommend consulting the local medical practitioners.',
                'If you require wheelchair and or additional assistance at airports, on the aircraft or during your trip please request this well in advance. We will work with our partners to provide appropriate assistance.',
                'Appreciate that travel can be stressful as well as enjoyable. Consideration of your mental wellbeing is as important as your physical health. Research your destination so you know what to expect. Be aware of factors such as time-zone changes, jet lag, sleep disruption, culture shock, anxiety due to travel and flying, and ensure you have strategies to deal with these. Find out how to access medical facilities at your destination and don’t be afraid to ask for help if you need it.'

            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-100 text-gray-800 p-4 sm:p-8">
            <div className="container max-w-8xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden p-4 sm:p-8">
                {/* Title */}
                <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-orange-600 mb-6 text-center">
                    Global Travel Safety Guidelines
                </h1>

                {/* Introduction */}
                <p className="text-sm text-black mb-1">
                    Your health and safety while on your trip is of the utmost importance to us. We operate in many countries around the world, all of which have differing standards and local regulations that may not always meet the standards we’re used to at home.
                </p>
                <p className="text-sm  text-black mb-8">
                    We always try to provide as much information as possible about local conditions. However, we recommend that you carry out some background research about the destinations you’re going to and any inherent risks involved in visiting these countries or in undertaking particular activities. The information below is designed to help ensure that you have a safe and enjoyable trip.
                </p>

                {/* Navigation Buttons */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
                    {sections.map((section) => (
                        <button
                            key={section.id}
                            onClick={() => setActiveSection(section.id)}
                            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-colors text-sm sm:text-base ${activeSection === section.id
                                    ? 'bg-orange-500 text-white'
                                    : 'bg-white text-orange-500 hover:bg-orange-100'
                                }`}
                        >
                            {section.title}
                        </button>
                    ))}
                </div>

                {/* Content Section */}
                <div className="bg-white rounded-2xl p-4 sm:p-8 min-h-[47vh]">
                    <h2 className="text-lg font-semibold text-orange-500 mb-4 sm:mb-6">
                        {sections.find((s) => s.id === activeSection)?.title}
                    </h2>
                    <ul className="text-gray-700 leading-relaxed text-sm">
                        {sections.find((s) => s.id === activeSection)?.content.map((item, index) => (
                            <li key={index} className="flex items-start mb-2">
                                <div className="text-xs sm:text-sm">
                                    <GoDotFill className="mr-2 mt-[3px]" />
                                </div>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Emergency Preparedness */}
                <div className=" text-center">
                    <h3 className="text-lg  font-bold text-gray-800 mb-4">
                        Stay Safe, Travel Smart!
                    </h3>
                </div>
            </div>
        </div>

    );
};

export default SafetyGuidelinesBlog;