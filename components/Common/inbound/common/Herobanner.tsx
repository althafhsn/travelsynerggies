


interface HerobannerProps {
    mainTitle:string;
    imageUrl: string;
    title: string;
    description: string[];
    letTalkButton?: boolean;
};


const Herobanner = ({
    mainTitle,
    imageUrl,
    title,
    description,
    letTalkButton
}: HerobannerProps
) => {
    return (
        <section className="py-2 lg:py-4 ">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">

                    <div className=" flex justify-center items-center">
                        <div className="w-full ">
                            <h2 className="text-lg md:text-3xl lg:text-6xl font-bold text-orange-500 my-2 max-lg:text-center font-manrope">
                                {mainTitle}
                            </h2>
                            <h2 className="text-lg md:text-2xl lg:text-4xl font-bold text-white my-2 max-lg:text-center font-manrope">
                                {title}
                            </h2>
                            <ul>
                                {description.map((desc, index) => (
                                    <li key={index} className="text-lg text-gray-200 text-justify py-2 mx-auto">
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                            {letTalkButton && (
                                <div className=" py-4 ">
                                    <button
                                        className="bg-orange-500 text-white px-6 py-3 rounded-lg text-sm md:text-base hover:bg-orange-600 transition-all">
                                        Let's Talk
                                    </button>
                                </div>
                            )}
                        </div>



                    </div>
                    <div className="flex justify-center items-center">
                        <img
                            src={imageUrl}
                            alt=""
                            className="object-cover h-[300px] xl:h-[530px] w-full max-w-[550px] rounded-lg"
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Herobanner
