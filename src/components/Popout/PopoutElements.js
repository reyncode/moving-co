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
`

export const PopoutWrapper = styled.div`
    position: relative;
    padding: 32px;
    width: 100%;
    height: 100%;
    max-width: 640px;
    max-height: 320px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 12px 15px rgba(0,0,0,0.3);
`

export const ContactInfo = styled.div`
    display: grid;
    // grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col1 col2';

    border-radius: 10px;
    background: #010606;
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    // grid-area: col3;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    // grid-area: col1;
`

export const BtnWrap = styled.div`

    display: flex;
    justify-content: center;
    
    padding-top: 15px;

    @media screen and (max-width: 480px) {
        
    }
`
export const EmailIcon = styled(HiOutlineMail)`
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 55px;
    color: #fff;
`

export const PhoneIcon = styled(BsPhone)`
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 55px;
    color: #fff;
`

export const FacebookIcon = styled(RiFacebookCircleLine)`
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 55px;
    color: #fff;
`

export const Heading = styled.h1`
    font-size: 26px;
    font-weight: 600;
    color: #fff;
`