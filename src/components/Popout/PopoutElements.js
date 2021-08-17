import styled from 'styled-components';
import { HiOutlineMail } from 'react-icons/hi';
import { BsPhone } from 'react-icons/bs';
import { RiFacebookCircleLine } from 'react-icons/ri';


export const PopoutContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 100vh;

    background-color: rgba(0, 0, 0, 0.2);

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: initial;
`

export const PopoutWrapper = styled.div`
    position: relative;
    padding: 5px;
    width: 100%;
    height: 100%;
    max-width: 600px;
    max-height: 265px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 12px 15px rgba(0,0,0,0.3);
`

export const ContactInfo = styled.div`
    display: grid;
    align-items: center;
    grid-template-areas: 'col1 col2';

    border-radius: 10px;
    background: #010606;
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
`

export const BtnWrap = styled.div`

    display: flex;
    justify-content: center;
    
    padding-top: 5px;
    padding-bottom: 5px;

    @media screen and (max-width: 480px) {
        
    }
`
export const EmailIcon = styled(HiOutlineMail)`
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 55px;
    color: #de6464;
`

export const PhoneIcon = styled(BsPhone)`
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 55px;
    color: #de6464;
`

export const FacebookIcon = styled(RiFacebookCircleLine)`
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 55px;
    color: #de6464;
`

export const Heading = styled.p`
    display: flex;
    align-items: flex-start;
    padding-right: 10px;

    cursor: pointer;

    font-size: 20px;
    font-weight: 400;
    line-height: 60px;
    color: #fff;
`
export const CloseButton = styled.button`
    border-radius: 10px;
    background: #de6464;
    white-space: nowrap;
    padding: 12px 48px;
    width: 100%;
    color: #010606;
    font-size: 1rem;
    
    outline: none;
    border: none;
    cursor: pointer;
    
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;


    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
    }
`