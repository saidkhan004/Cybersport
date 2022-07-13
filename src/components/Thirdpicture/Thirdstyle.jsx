import styled from "styled-components";
import GAME from '../../images/rasm3.png'

export const Container = styled.div`
    width: 100%;
    height: 480px;
    background: url(${GAME});
    background-repeat: no-repeat;
    background-size: cover;
    @media (max-width: 422px) {
        height: 550px;
    }
`
export const Word = styled.p`
    font-family: 'Russo One';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 43px;
    letter-spacing: 0.14em;
    color: #FFFFFF;
    padding-top: 100px;
    margin-left: 100px;
    @media (max-width: 1040px){
        font-size: 30px;
    }
    @media (max-width: 870px){
        font-size: 25px;
    }
    @media (max-width: 740px){
        font-size: 21px;
    }
    @media (max-width: 740px){
        font-size: 17px;
    }
    @media (max-width: 540px){
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 10px;
    }
    @media (max-width: 422px) {
        line-height: 38px;
        font-size: 16px;
    }
`
export const Btn = styled.button`
    border-radius: 5px;
    font-family: 'Montserrat';
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    outline: none;
    color: #fff;
    width: 211px;
    height: 56px;
    font-size: 20px;
    line-height: 42px;
    padding: 0;
    border: none;
    background: #8F00FF;
    margin-top: 75px;
    margin-left: 120px;
    @media (max-width: 740px) {
        width: 180px;
    }
    @media (max-width: 740px) {
        width: 170px;
        font-size: 17px;
        height: 40px;
        margin-top: 50px;
        margin-left: 110px;
    }
    @media (max-width: 740px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @media (max-width: 370px) {
        margin-left: 100px;
    }
    @media (max-width: 340px) {
        margin-left: 90px;
    }
    @media (max-width: 320px) {
        margin-left: 80px;
    }
    &:hover{
        background: transparent;
        box-shadow:none;
    }
    &::before,::after{
        content:'';
        position:absolute;
        top:0;
        right:0;
        height:2px;
        width:0;
        background: linear-gradient(92.49deg, #AD00FF 14.3%, #00E0FF 100%);
        transition:400ms ease all;
    }
    &::after{
        right:inherit;
        top:inherit;
        left:0;
        bottom:0;
    }
    &:hover::before,:hover::after{
        width:100%;
        transition:800ms ease all;
    }
`
