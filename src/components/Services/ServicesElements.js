import styled from 'styled-components'

export const ServicesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;
`
export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
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

    @media screen and (max-width: 480px) {
        max-height: 350px;
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
    
    @media screen and (max-width: 480px) {
        margin-top: 10px;
        margin-bottom: 40px;
    }
    
`