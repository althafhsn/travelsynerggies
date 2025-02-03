import Image from 'next/image';
import React from 'react'
import { CiLocationOn } from 'react-icons/ci';


interface InboundImageCardsProps {
    index: any;
    imageUrl: string;
    title: string;
    designedBy?: string;
    openedIn?: string;
    description: string[];
    facilitiesOnSiteArea?: string[];

}
const InboundImageCards = ({
    index,
    imageUrl,
    title,
    designedBy,
    openedIn,
    description,
    facilitiesOnSiteArea
}: InboundImageCardsProps) => {
    return (
        <article
            key={index}
            className="group relative isolate flex flex-col justify-end overflow-hidden rounded-sm transition-all duration-500 hover:scale-105 pb-6 w-[300px] h-[450px] md:w-[280px] lg:h-[350px] xl:w-[340px] xl:h-[480px]  mx-auto mt-12 cursor-pointer"
        >
            {/* Background Image */}
            <Image
                src={imageUrl}
                fill
                alt={title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700"
            />

            {/* Dark Overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-[40px] bg-black/60 transition-all duration-500 group-hover:h-full" />

            {/* Content */}
            <div className="relative z-10 px-4 transition-all duration-500">
                {/* Title with Location Icon */}
                <div className="flex items-center gap-1 transition-all duration-500 group-hover:translate-y-[-10px] -mb-4 group-hover:mb-0">
                    <CiLocationOn className="text-lg text-orange-500" />
                    <h3 className="text-[15px] font-extrabold text-orange-500">
                        {title}
                    </h3>
                </div>

                {/* Information Section */}
                <div className="opacity-0 max-h-0 overflow-hidden transition-all duration-500 group-hover:opacity-100 group-hover:max-h-[100%] group-hover:mt-2">
                    {designedBy && <p className="text-xs leading-5 text-white mb-2">Designed by: {designedBy}</p>}
                    {openedIn && <p className="text-xs leading-5 text-white mb-2">Opened in: {openedIn}</p>}
                    {description && description.length > 0 && (
                        <div className="mt-2">
                            <ul className=" list-inside text-xs leading-5 text-white">
                                {description.map((des, idx) => (
                                    <li key={idx}>{des}</li>
                                ))}
                            </ul>
                        </div>
                    )}


                    {/* Facilities Section */}
                    {facilitiesOnSiteArea && facilitiesOnSiteArea.length > 0 && (
                        <div className="mt-2">
                            <h2 className="text-xs font-semibold text-white">Facilities On Site Area:</h2>
                            <ul className="list-disc list-inside text-xs leading-5 text-white">
                                {facilitiesOnSiteArea.map((facility, idx) => (
                                    <li key={idx}>{facility}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </article >
    )
}

export default InboundImageCards
