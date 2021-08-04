import React from 'react'
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElements'
import Icon1 from '../../images/svg-2.svg'
import Icon2 from '../../images/svg-3.svg'
import Icon3 from '../../images/svg-4.svg'

const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Long Delivery</ServicesH2>
                    <ServicesP>We can move your things across the province.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Local Delivery</ServicesH2>
                    <ServicesP>We can move your things in the community.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Moving Help</ServicesH2>
                    <ServicesP>We can lend an extra hand with your move in.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
