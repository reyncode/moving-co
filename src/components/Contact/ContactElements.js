import styled from 'styled-components';

export const ContactContainer = styled.div`
    color: #fff;
    background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const ContactWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 100vh;
    width: 100%;
    max-width: 1100px;
    margin-top: 40px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

export const ContactRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const Column1 = styled.div`
    display: grid;
    grid-auto-rows: minmax(auto, 1fr);
    align-items: center; 

    margin-bottom: 15px;
    padding: 0 15px;
    // grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 35px;
    grid-area: col2;

    // @media screen and (max-width: 480px) {
    //     display: none;
    // }
`

export const ContactForm = styled.form`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;

    @media screen and (max-width: 480px) {
        justify-content: center;
        align-items: center;
    }
`

export const ContactH1 = styled.h1`
    font-size: 3rem;
    
`

export const ContactName = styled.input`
    width: 100%;
    height: 2rem;
    margin-top: 2rem;
    border: none;
    // border-bottom: 1px solid #000;
`

export const ContactEmail = styled.input`
    width: 100%;
    height: 2rem;
    margin-top: 2rem;
    border: none;
    border-bottom: 1px solid #000;
`

export const ContactSubject = styled.input`
    width: 100%;
    height: 2rem;
    margin-top: 2rem;
    border: none;
    border-bottom: 1px solid #000;
`

export const ContactMessage = styled.input`
    width: 100%;
    height: 2rem;
    margin-top: 2rem;
    border: none;
    border-bottom: 1px solid #000;
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img`
    width: 80%;
    margin: 0 0 10px 0;
    padding-right: 0;
`