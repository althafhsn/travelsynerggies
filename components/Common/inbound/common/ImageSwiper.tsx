'use client'

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import WorkSliderButton from '@/components/WorkSliderButton';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface ImageCarousel {
  title: string;
  description: string;
  image: string;
}

interface ImageSwiperProps {
  images: ImageCarousel[];
}

const ImageSwiper = ({ images }: ImageSwiperProps) => {
  const [activeImage, setActiveImage] = useState<ImageCarousel>(images[0]);

  const handleSlideChange = (swiper: any) => {
    setActiveImage(images[swiper.realIndex]);
  };

  return (
    <div className="md:w-full max-w-7xl mx-auto px-4 w-[50%] ">
      {/* Swiper Carousel */}
      <Swiper
        modules={[EffectCoverflow, Navigation, Pagination]}
        loop={true}
        centeredSlides={true}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 3,
          slideShadows: true
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 1.5 },

        }}
        className="w-full mx-auto"
        onSlideChange={handleSlideChange}
      >
        {images.map((image, index) => (
          <SwiperSlide key={`slide-${index}`}>
            <div className="flex justify-center">
              <div className="relative w-[500px] h-[350px] md:w-[600px] md:h-[450px] lg:w-[700px] lg:h-[500px] xl:w-[800px] xl:h-[580px] rounded-lg overflow-hidden cursor-grab">
                <Image
                  src={image.image}
                  fill
                  className="object-cover"
                  alt={image.title}
                  priority
                />
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

      {/* Active Image Details */}
      <div className="mt-6 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 py-2">
          {activeImage.title}
        </h1>
        <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto px-2">
          {activeImage.description}
        </p>
      </div>
    </div>
  );
};

export default ImageSwiper;
