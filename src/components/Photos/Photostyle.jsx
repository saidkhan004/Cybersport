import styled from "styled-components";

export const Container = styled.div`
    
`
export const Words = styled.div`
    width: 100%;
    display: flex;
    padding-left: 13%;
    margin-top: 25px;
    margin-bottom: 15px;
`
export const Word = styled.p`
    font-family: 'Russo One';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 34px;
    color: #FFFFFF;
    @media (max-width: 370px){
        padding-left: 14%;
        font-size: 25px;
    }
`
export const Images = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: -150px;
    @media screen and (max-width: 1110px) {
        transform: scale(0.9);
        margin-left: -130px;
    }
    @media screen and (max-width: 1010px) {
        transform: scale(0.8);
        margin-left: -115px;
        margin-top: -50px;
    }
    @media screen and (max-width: 900px) {
        transform: scale(0.7);
        margin-left: -100px;
    }
    @media screen and (max-width: 800px) {
        transform: scale(0.6);
        margin-left: -90px;
        margin-top: -50px;
    }
    @media screen and (max-width: 700px) {
        transform: scale(0.5);
        margin-left: -75px;
        margin-top: -100px;
    }
    @media screen and (max-width: 580px) {
        transform: scale(0.4);
        margin-left: -60px;
        margin-top: -150px;
    }
    @media screen and (max-width: 480px) {
        transform: scale(0.3);
        margin-left: -43px;
        margin-top: -200px;
    }
    @media screen and (max-width: 355px) {
        transform: scale(0.2);
        margin-left: -33px;
        margin-top: -200px;
    }
`

export const Items = styled.div`
    position: relative;
    top: 30px;
    @media screen and (max-width: 470px) {
        display: none;
    }
    
`
export const Items2 = styled.div`
    display: none;
    @media screen and (max-width: 470px) {
        display: block;
    }
`
export const Images2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transform: scale(0.5 );
    margin-top: -100px;
    margin-bottom: -350px;
`
export const Imgs = styled.img`
    margin: 15px;
    border: 5px solid #7801d9;
    border-radius: 10px;
    :nth-child(5){
        width: 400px;
    }
    transition: 0.4s;
    :hover{
        transform: scale(1.5);
        z-index: 10;
    }
`

export const ImagesBorder = styled.div`
    margin-left: 145px;
    left: 100px;
    width: 1067px;
    height: 577px;
    box-shadow: 0px 0px 20px rgb(103, 103, 255);
    border: double 0.3em transparent;
    border-radius: 8px;
    background-image: linear-gradient(rgba(27, 4, 79, 1), rgba(27, 4, 79, 1)),
    linear-gradient(to right, rgba(173, 0, 255, 1), rgba(0, 224, 255, 1));
    background-origin: border-box;
    background-clip: content-box, border-box;
`
export const Item1 = styled.img`
    width: 300px;
    position: absolute;
    left: 150px;
    transition: 0.4s;
    :hover{
        transform: scale(1.2);
        z-index: 10;
    }
`
export const Item2 = styled.img`
    width: 300px ;
    position: absolute;
    left: 450px;
    transition: 0.4s;
    :hover{
        transform: scale(1.2);
        z-index: 10;
    }
`
export const Item3 = styled.img`
    width: 300px ;
    position: absolute;
    left: 450px;
    top: 142px;
    transition: 0.4s;
    :hover{
        transform: scale(1.2);
        z-index: 10;
    }
    
`
export const Item4 = styled.img`
    width: 208px ;
    position: absolute;
    left: 750px;
    transition: 0.4s;
    :hover{
        transform: scale(1.2);
        z-index: 10;
    }
`
export const Item5 = styled.img`
    width: 250px ;
    position: absolute;
    left: 958px;
    transition: 0.4s;
    :hover{
        transform: scale(1.2);
        z-index: 10;
    }
`
export const Item6 = styled.img`
    width: 250px ;
    position: absolute;
    left: 958px;
    top: 137px;
    transition: 0.4s;
    :hover{
        transform: scale(1.2);
        z-index: 10;
    }
`
export const Item7 = styled.img`
    width: 348px ;
    position: absolute;
    top: 285px;
    left: 102px;
    transition: 0.4s;
    :hover{
        transform: scale(1.2);
        z-index: 10;
    }
`
export const Item8 = styled.img`
    width: 300px ;
    position: absolute;
    top: 430px;
    left: 150px;
    transition: 0.4s;
    :hover{
        transform: scale(1.2);
        z-index: 10;
    }
`
export const Item9 = styled.img`
    width: 508px ;
    position: absolute;
    top: 285px;
    left: 450px;
    transition: 0.4s;
    :hover{
        transform: scale(1.2);
        z-index: 10;
    }
`
export const Item10 = styled.img`
    width: 249px ;
    position: absolute;
    top: 275px;
    left: 958px;
    transition: 0.4s;
    :hover{
        transform: scale(1.2);
        z-index: 10;
    }
`