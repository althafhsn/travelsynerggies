'use client';
import { Dancing_Script } from 'next/font/google'

import { Rock_Salt } from 'next/font/google';

const shadowsIntoLight = Rock_Salt({
    weight: '400',
    subsets: ['latin'],
});


const dancingScript = Dancing_Script({
    subsets: ['latin'],
    weight: ['400', '700']
})
const Hero = () => {


    return (
        <div>


                {/* About Section with proper background */}
                <section className="relative pt-8">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="container mx-auto px-8 relative">
                        <div className="grid lg:grid-cols-2 gap-8 lg:text-start px-2">
                            <div className="flex flex-col pt-4 text-center ">
                                <h2 className="text-3xl md:text-5xl font-bold py-2 ">Travel the World,</h2>
                                <h2 className="text-orange-500 text-3xl md:text-5xl font-bold pb-5 ">Live the Moment ! </h2>

                                <h3 className={`${dancingScript.className} md:text-2xl text-lg text-center md:text-start`}>Dear Guest,</h3>
                                <p className={` mt-4 leading-relaxed ${dancingScript.className} md:text-2xl text-lg text-justify`}>
                                    Imagine waking up to the sound of waves gently crashing on a pristine beach, the golden sun warming your skin as you sip on a fresh coconut. Or picture yourself standing atop a snow-capped mountain, the crisp air filling your lungs as you take in the panoramic views of nature’s grandeur. Whether you’re dreaming of a tropical paradise, a cultural adventure, or a serene retreat, we’ve curated the world’s most stunning destinations to match your travel desires.
                                </p>

                                <div className='flex flex-col md:ps-64'>
                                    <p className={` mt-4 leading-relaxed ${dancingScript.className} md:text-2xl text-lg   text-start text-white pb-4`}>
                                        Yours Sincerely
                                    </p>
                                    <p className={`text-lg md:ps-20 font-bold md:text-xl  text-orange-500 ${shadowsIntoLight.className}`}>
                                        Your Travel Designer
                                    </p>
                                </div>

                                <div className='flex justify-center items-end flex-col md:ps-64'>


                                </div>


                            </div>

                            <div className="relative hidden md:flex justify-center pt-6">
                                <img
                                    src="/outbound/about.webp"
                                    alt="Suspension bridge"
                                    className="w-[400px] h-[500px] object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </section>
        </div>
    )
}

export default Hero