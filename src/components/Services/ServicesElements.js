import styled from 'styled-components'

export const ServicesContainer = styled.div`
    // height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    // @media screen and (max-width: 768px) {
    //     height: 1600px;
    // }

    // @media screen and (max-width: 480px) {
    //     height: 1650px;
    // }

    // @media screen and (max-width: 360px) {
    //     height: 1500px;
    // }
`
export const ServicesWrapper = styled.div`
    max-width: 1000px;
    // height: 100vh;
    margin: 0 auto;
    display: grid;
    // grid-auto-columns: minmax(auto, 2fr);
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 300px;
    max-width: 728px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const ServicesIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`

export const ServicesH1 = styled.h1`
    font-size: 3rem;
    color: #fff;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`
export const ServicesCategory = styled.p`
    font-size: 1.5rem;
    color: #de6464;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    padding-top: 30px;
    padding-bottom: 30px;
`

export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
`