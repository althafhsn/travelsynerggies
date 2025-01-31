'use client'

import { useSwiper } from "swiper/react"
import { Button } from '@/components/ui/button'
import { IoMdArrowForward , IoMdArrowBack  } from "react-icons/io";


interface WorkSliderButtonProps {
    containerStyle: string;
    btnStyle: string;
    iconsStyle: string;
}

const WorkSliderButton = ({ containerStyle, btnStyle, iconsStyle }: WorkSliderButtonProps) => {

    const swiper = useSwiper()
    return (
        <div className={containerStyle}>
            <Button className={btnStyle} onClick={() => swiper.slidePrev()}>
                <IoMdArrowBack  className={iconsStyle} />
            </Button>
            <Button className={btnStyle} onClick={() => swiper.slideNext()}>
                <IoMdArrowForward  className={iconsStyle} />
            </Button>
        </div>
    )
}

export default WorkSliderButton
