import styled from "styled-components";
import Picture from '../../images/oldphoto.png'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: url(${Picture}) fixed center;
    background-repeat: no-repeat;
    background-size: cover;
    flex-wrap: wrap;
    @media (max-width:1049px){
        height: 130vh;
    }
    @media (max-width: 1000px) {
        height: 150vh;
    }
    @media (max-width: 919px) {
        height: 200vh;
    }
    @media (max-width: 320px) {
        height: 225vh;
    }
    @media (max-width: 415px) {
        height: 225vh;
    }
    @media (max-width: 1066px){
        height: 200vh;
    }
    @media (max-width: 936px){
        height: 250vh;
    }
`
export const Words = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
`
export const Word = styled.p`
    font-family: 'Russo One';
    font-style: normal;
    font-weight: 400;
    font-size: 33px;
    line-height: 43px;
    text-align: center;
    letter-spacing: 0.14em;
    color: #FFFFFF;
    @media (max-width: 1140px){
        font-size: 29px;
    }
    @media (max-width: 970px){
        font-size: 25px;
    }
    @media (max-width: 840px){
        font-size: 20px;
    }
    @media (max-width: 660px){
        font-size: 16px;
    }
    @media (max-width: 540px){
        width: 320px;
        font-size: 16px;
        line-height: 32px;
    }
`
export const Table = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 140px;
    flex-wrap: wrap;
`
export const Middle = styled.div`
    width: 380px;
    height: 250px;
    width: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    border: 2px solid #2e2ef7;
    border-radius: 8px;
    @media (max-width: 1049px) {
        margin: 20px;
    }
    @media (max-width: 1000px) {
        margin: 55px;
    }
    @media (max-width: 320px) {
        margin: 80px;
        padding: 100px 0px;
    }
    @media (max-width: 415px) {
        margin: 70px;
        padding: 0px;
    }
`
export const FirstImg = styled.img`
    margin-bottom: 30px;
    @media (max-width: 320px) {
        margin-top: 35px;
    }
    @media (max-width: 415px) {
        margin-top: 40px;
    }
`
export const Firstword = styled.p`
    font-family: 'Russo One';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 168%;
    letter-spacing: 0.14em;
    color: #FFFFFF;
    @media (max-width:415px){
        line-height: 140%;
    }
`
export const Wordfirst = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 0.14em;
    color: #FFFFFF;
    @media (max-width: 320px) {
        width: 300px;
    }
    @media (max-width: 370px) {
        width: 300px;
    }
    @media (max-width: 325px) {
        width: 300px;
    }
`
export const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 130px;
`