import React from 'react'
import {
    PopoutContainer,
    PopoutWrapper,
    BtnWrap,
    ContactInfo,
    Column1,
    Column2,
    EmailIcon,
    PhoneIcon,
    FacebookIcon,
    Heading,
    CloseButton
} from './PopoutElements'

function Popout(props) {
    return (props.trigger) ? (
        <PopoutContainer>
            <PopoutWrapper>
                <ContactInfo>
                    <Column1>
                        <EmailIcon />
                        <PhoneIcon />
                        <FacebookIcon />
                    </Column1>
                    <Column2>
                        <Heading>conveniencetransportationhfx@gmail.com</Heading>
                        <Heading>902 221 8615</Heading>
                        <Heading>Convenience Transportation HFX</Heading>
                    </Column2>
                </ContactInfo>
                <BtnWrap>
                    <CloseButton onClick={() => props.setTrigger(false)}>
                        Close
                    </CloseButton>
                    {props.children}
                </BtnWrap>
            </PopoutWrapper>
        </PopoutContainer>
    ) : "";
}

export default Popout
