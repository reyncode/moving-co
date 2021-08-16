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
    Heading
} from './PopoutElements'
import { Button } from '../ButtonElements'
// import { headline } from './data';


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
                        <Heading />
                        <Heading />
                        <Heading />
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
