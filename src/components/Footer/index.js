import React from 'react'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItem,
    FooterLinkTitle,
    FooterLink,
    FooterLinkFacebook,
    FacebookIcon,
    WebsiteRightsContainer,
    WebsiteRightsWrap,
    WebsiteRights
} from './FooterElements'


const Footer = () => {
    return (
        <FooterContainer id='contact'>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItem>
                            <FooterLinkTitle>How to reach us</FooterLinkTitle>
                            <FooterLink to='/'>movingco@email.com</FooterLink>
                            <FooterLink to='/'>123 456 7890</FooterLink>
                            <FooterLinkFacebook
                                target='_blank'
                                href='/'>
                                <FacebookIcon />
                            </FooterLinkFacebook>
                        </FooterLinkItem>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <WebsiteRightsContainer>
                    <WebsiteRightsWrap>
                        <WebsiteRights>Copyright 2021, MovingCo</WebsiteRights>
                    </WebsiteRightsWrap>
                </WebsiteRightsContainer>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
