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
    FacebookIcon
} from './PopoutElements'
import { Button } from '../ButtonElements'


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
                        <h2>conveniencetransportationhfx@gmail.com</h2>
                        <h2>(902) 221-8615</h2>
                        <h1>Convenience Transportation HFX</h1>
                    </Column2>
                </ContactInfo>
                <BtnWrap>
                    <Button onClick={() => props.setTrigger(false)}
                    >Close</Button>
                    {props.children}
                </BtnWrap>
            </PopoutWrapper>
        </PopoutContainer>
    ) : "";
}

export default Popout
