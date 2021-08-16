import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

export const CloseIcon = styled(FaTimes)`
    position: absolute;
    top: 16px;
    right: 16px
    color: #de6464;
`

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
    max-width: 640px;
    background-color: #fff;
`