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
                            <FooterLink to='/'>conveniencetransportationhfx@gmail.com</FooterLink>
                            <FooterLink to='/'>902 580 6116</FooterLink>
                            <FooterLinkFacebook
                                target='_blank'
                                href='https://www.facebook.com/Convenience-Transportation-HFX-104663961918238'>
                                <FacebookIcon />
                            </FooterLinkFacebook>
                        </FooterLinkItem>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <WebsiteRightsContainer>
                    <WebsiteRightsWrap>
                        <WebsiteRights>Convenience Transportation HFX © 2021 all rights reserved.</WebsiteRights>
                    </WebsiteRightsWrap>
                </WebsiteRightsContainer>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
