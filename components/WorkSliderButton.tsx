'use client'

import { useSwiper } from "swiper/react"
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi'
import { Button } from '@/components/ui/button'


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
                <PiCaretLeftBold className={iconsStyle} />
            </Button>
            <Button className={btnStyle} onClick={() => swiper.slideNext()}>
                <PiCaretRightBold className={iconsStyle} />
            </Button>
        </div>
    )
}

export default WorkSliderButton
