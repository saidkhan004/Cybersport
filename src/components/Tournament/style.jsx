import styled from 'styled-components'

import Background from '../../images/tournamentBg.png'

export const Wrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover; 
    
`

export const Container = styled.div`
    width: 100%;
    max-width: 1440px;
`

// Navigation bar

export const Navbar = styled.div`
    width: 100%;
    height: 100px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width:768px) {
        flex-direction: column;
        height: auto;
    }
`

export const NavTitle = styled.h1`
    font-weight: 400;
    font-size: 28px;
    line-height: 34px;
    color: #FFFFFF;
    margin-left: 40px;
    @media (max-width:768px) {
       display: none;
    }
`

export const FuncButton = styled.button`
    font-family: 'Russo one',sans-serif;
    border: none;
    font-weight: 400;
    font-size: 28px;
    font-size: 23px;
    margin: 20px 0;
    color: white;
    background-color: #b918b9;
    width: 80%;
    height: 40px;
    cursor: pointer;
    border-radius: 10px;
    font-size: 20px;
    display: none;
    @media (max-width:768px) {
        display: block;
    }
`

export const LinkWr = styled.div`
    width: 670px;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 40px;
    transition: all ease 1s;
    @media (max-width:768px) {
        width: 80%;
        flex-direction: column;
        align-items: center;
        margin-right: 0;
        display: ${p=>p.bolen ? 'none' : 'flex'};
    }
`

export const Link = styled.h2`
    font-weight: 200;
    font-family: 'Montserrat',sans-serif;
    font-size: 22px;
    cursor: pointer;
    color: #FFFFFF;
    position: relative;
    &::before{
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        width: 0;
        height: 2px;
        background: linear-gradient(92.49deg, #AD00FF 14.3%, #00E0FF 100%);
        transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1);
    }
    
    @media (hover: hover) and (pointer: fine) {
    &:hover::before{
      left: 0;
      right: auto;
      width: 100%;
    }
  }
  @media (max-width:768px) {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    background-color: #5461d4;
    border-radius: 5px;
    &:active{
        opacity: 0.6;
    }
  }
`

// Teams wrapper

export const Teams = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    @media (max-width:870px) {
        align-items: center;
    }
`

export const TeamCard = styled.div`
    width: 100%;
    height: 280px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
    @media (max-width:870px) {
        width: 500px;
        flex-direction: column;
        justify-content: space-around;
        height: 400px;
    }
    @media (max-width:580px) {
        width: 90%;
    }
    @media (max-width:440px) {
        height: 250px;
    }
`

export const AvaCard = styled.div`
    width: 45%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 40px;
    h1{
        font-weight: 400;
        font-size: 36px;
        line-height: 43px;
        letter-spacing: 0.2em;
        color: #FFFFFF;
    }
    @media (max-width:870px) {
        width: 100%;
        margin-left: 0;
    }
`

export const Avatar = styled.img`
    width: 216px;
    height: 214px;
    border-radius: 10px;
    object-fit: contain;
    @media (max-width:1050px) {
        width: 186px;
        height: 184px;
    }
    @media (max-width:508px) {
        width: 65%;
        height: 65%;
        object-fit: contain;
    }
    @media (max-width:440px) {
        width: 50%;
        height: 50%;
        object-fit: contain;
    }
`

export const CardTexts = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 40px;
    h2{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        color: #FFFFFF;
        margin-bottom: 20px;
    }
    p{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 17px;
        color: #FFFFFF;
    }
    @media (max-width:1050px) {
        h2{
            font-size: 23px;
        }
        p{
            font-size: 12px;
        }
    }
    @media (max-width:870px) {
        width: 100%;
        margin-left: 0;
        align-items: center;
        h2{
            text-align: center;
        }
    }
    @media (max-width:440px) {
        h2{
            font-size: 18px;
        }
        p{
            font-size: 9px;
        }
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
    margin-top: 55px;
    margin-left: 68rem;
    @media (max-width: 1305px){
        margin-left: 55rem;
    }
    @media (max-width: 1100px){
        margin-left: 45rem;
    }
    @media (max-width: 940px){
        margin-left: 35rem;
    }
    @media (max-width: 790px){
        margin-left: 37%;
    }
    @media (max-width: 650px){
        margin-left: 30%;
    }
    @media (max-width: 500px){
        margin-left: 28%;
    }
    @media (max-width: 450px){
        margin-left: 32%;
        width: 170px;
        height: 40px;
        font-size: 16px;
    }
    @media (max-width: 370px){
        margin-left: 28%;
        width: 170px;
        height: 40px;
        font-size: 16px;
    }
    @media (max-width: 340px){
        margin-left: 25%;
        width: 170px;
        height: 40px;
        font-size: 16px;
    }
    @media (max-width: 320px){
        margin-left: 24%;
        width: 170px;
        height: 40px;
        font-size: 16px;
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




