import styled from 'styled-components';

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
    max-height: 600px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 12px 15px rgba(0,0,0,0.3);
`

export const BtnWrap = styled.div`

    display: flex;
    justify-content: center;
    
    padding-top: 15px;

    @media screen and (max-width: 480px) {
        
    }
`