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
            <ServicesH1>Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Express</ServicesH2>
                    <ServicesP>Same-day transportation for orders booked at least 4 hours prior to the pickup time, and next-day transportation for orders booked anytime the day prior.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Scheduled</ServicesH2>
                    <ServicesP>Transportation that can be booked up to 30 days in advance.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Short- and long-haul</ServicesH2>
                    <ServicesP>Short-haul transportation within the HRM, and up to 150 km outside in either direction. Long-haul transportation is province-wide, exceeding 150km. </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
