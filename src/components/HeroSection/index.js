import React, { useState } from 'react'
// import Video from '../../videos/taping-box2.mp4'
import {
    HeroContainer,
    HeroBg,
    // VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements'
import { Button } from '../ButtonElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                {/* <VideoBg autoPlay loop muted src={Video} type='video/mp4' /> */}
            </HeroBg>
            <HeroContent>
                <HeroH1>From here to there</HeroH1>
                <HeroP>Let us give you a hand.</HeroP>
                <HeroBtnWrapper>
                    <Button to='about'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'>
                        Learn more {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
