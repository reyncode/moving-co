import React, { useState, useEffect } from 'react'
import {
    HeroContainer,
    HeroBg,
    ImgBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements'

import { Button } from '../ButtonElements'

import desktopImage from '../../images/unloading-truck.jpg'
import mobileImage from '../../images/handling-box.jpg'

const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }
    const imageUrl = window.innerWidth >= 1100 ? desktopImage : mobileImage;
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);


    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, [windowWidth]);

    return (
        <HeroContainer>
            <HeroBg>
                <ImgBg style={{ backgroundImage: `url(${imageUrl})` }} />
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
