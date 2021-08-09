import React from 'react'
import { Button } from '../ButtonElements'
import {
    ContactContainer,
    ContactWrapper,
    ContactRow,
    Column1,
    ContactForm,
    ContactH1,
    ContactName,
    ContactEmail,
    ContactMessage,
    Column2,
    ImgWrap,
    Img,
    BtnWrap
} from './ContactElements'

const Contact = ({
    lightBg,
    id,
    imgStart,
    headline,
    img,
    alt,
    buttonLabel,
    primary,
    dark
}) => {
    return (
        <ContactContainer lightBg={lightBg} id={id}>
            <ContactWrapper>
                <ContactRow imgStart={imgStart}>
                    <Column1>
                        <ContactForm>
                            <ContactH1>{headline}</ContactH1>
                            <ContactName type='text' id='name' placeholder='Full Name' />
                            <ContactEmail type='email' id='email' placeholder='Email' />
                            <ContactMessage type='message' placeholder='Message' cols='30' rows='10' />
                            <BtnWrap>
                                <Button
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1 : 0}
                                >{buttonLabel}
                                </Button>
                            </BtnWrap>
                        </ContactForm>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt} />
                        </ImgWrap>
                    </Column2>
                </ContactRow>
            </ContactWrapper>
        </ContactContainer>
    )
}

export default Contact
