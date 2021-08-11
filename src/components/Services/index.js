import React from 'react'
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP,
    ServicesCategory
} from './ServicesElements'
import Icon1 from '../../images/drone-delivery.svg'
import Icon2 from '../../images/schedule-delivery.svg'
import Icon3 from '../../images/short-haul.svg'
import Icon4 from '../../images/long-haul.svg'

const Services = () => {
    return (
        <ServicesContainer id='solutions'>
            <ServicesH1>Solutions</ServicesH1>
            <ServicesCategory>How fast?</ServicesCategory>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Express</ServicesH2>
                    <ServicesP>Same-day transportation for orders booked at least 4 hours prior to the pickup time.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Scheduled</ServicesH2>
                    <ServicesP>Scheduled transportation booked up to 30 days in advance.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
            <ServicesCategory>How far?</ServicesCategory>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Short-haul</ServicesH2>
                    <ServicesP>Short-haul transportation within the HRM, and up to 150 km outside in either direction.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon4} />
                    <ServicesH2>Long-haul</ServicesH2>
                    <ServicesP>Long-haul transportation is province-wide, exceeding 150km from origin. </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
