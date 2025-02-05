'use client'
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import WorkSliderButton from '@/components/WorkSliderButton';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

interface ImageCarousel {
    title: string;
    description: string;
    image: string;
}

interface ImageSwiperProps {
    images: ImageCarousel[];
}



const ImageSwiper = ({ images }: ImageSwiperProps) => {
    const [image, setImage] = useState(images[0]);

    const handleSlideChange = (swiper: any) => {
        setImage(images[swiper.realIndex]);
    };

    return (
        <div className="">
            <div>
                <Swiper
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'} // Adjusted to ensure centering
                    spaceBetween={2}
                    initialSlide={Math.floor(images.length / 2)} // Start with center slide
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 200,
                        modifier: 2.5,
                        slideShadows: true,
                    }}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="w-full  mx-auto"
                    onSlideChange={handleSlideChange}
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={`slide-${index}`}>
                            <div className="sticky top-0 xl:relative">
                                <div className="grid grid-cols-1 items-center">
                                    <div className="xl:order-2">
                                        <div className="mx-auto relative h-[420px] md:h-[580px] lg:h-[580px] w-[65%] rounded-lg overflow-hidden cursor-grab pt-2">
                                            <div className="pointer-events-auto">
                                                <Image
                                                    src={image.image}
                                                    fill
                                                    className="object-fill cursor-grab"
                                                    alt={`${image.title}`}
                                                    priority
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <WorkSliderButton
                        containerStyle="flex absolute right-1 top-1/2 z-10 w-full justify-between md:gap-1"
                        btnStyle="bg-orange-500/50 hover:bg-orange-500 text-orange-500 text-[30px] w-[28px] scale-[80%] md:scale-[90%] md:w-[40px] flex justify-center items-center transition-all rounded-full"
                        iconsStyle="w-4 h-4 md:w-8 md:h-8 text-white"
                    />
                </Swiper>
                <div>
                    <h1 className="text-4xl font-bold text-center text-orange-500 py-2">{image.title}</h1>
                    <p className="text-center text-lg text-gray-300 max-w-5xl mx-auto">{image.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ImageSwiper;