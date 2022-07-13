import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 80vh;
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 676px) {
        margin-bottom: 550px;
    }
`
export const Div = styled.div`
    width: 88%;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`
export const Thirddiv = styled.div`
    width: 250px;
    height: 250px;
    /* border: 1px solid red; */
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    border: double 0.3em transparent;
    border-radius: 8px;
    background-image: linear-gradient(rgba(27, 4, 79, 1), rgba(27, 4, 79, 1)),
    linear-gradient(to right, rgba(218, 2, 255, 1), rgba(104, 225, 253, 1));
    background-origin: border-box;
    background-clip: content-box, border-box;

    h1{
        font-family: 'Russo One';
        font-style: normal;
        font-weight: 400;
        font-size: 48px;
        line-height: 168%;
        letter-spacing: 0.14em;
        color: #FFFFFF;
    }
    p{
        font-family: 'Russo One';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 168%;
        letter-spacing: 0.14em;
        color: #FFFFFF;
    }
`
