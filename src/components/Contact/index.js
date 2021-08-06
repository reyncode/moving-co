import React from 'react'
import {
    ContactContainer,
    ContactWrapper,
    ContactRow,
    Column1,
    ContactForm,
    ContactH1,
    ContactName,
    ContactEmail,
    ContactSubject,
    ContactMessage,
    Column2,
    ImgWrap,
    Img
} from './ContactElements'

const Contact = ({
    lightBg,
    id,
    imgStart,
    headline,
    img,
    alt
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
                            <ContactSubject type='subject' id='subject' placeholder='Subject' />
                            <ContactMessage type='message' placeholder='message' cols='30' rows='10' />
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
