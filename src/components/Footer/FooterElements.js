import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { RiFacebookCircleLine } from 'react-icons/ri'

export const FooterContainer = styled.footer`
    background-color: #101522;
    border-top: 3px solid #fff;
`

export const FooterWrap = styled.div`
    padding: 20px 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const FooterLinkItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`

export const FooterLinkTitle = styled.h1`
    font-size: 18px;
    margin-bottom: 22px;
`

export const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover {
        color: #de6464;
        transition: 0.2s ease-out;
    }
`

export const FooterLinkFacebook = styled.a`
    color: #fff;
    text-decoration: none;
    font-size: 14px;

    &:hover {
        color: #de6464;
        transition: 0.2s ease-out;
    }
`

export const FacebookIcon = styled(RiFacebookCircleLine)`
    font-size: 40px;
`

export const WebsiteRightsContainer = styled.section`
    max-width: 1000px;
    width: 100%;
`

export const WebsiteRightsWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 20px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const WebsiteRights = styled.small`
    color: #fff;
    font-size: 10px;

`