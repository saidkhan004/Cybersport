import styled from "styled-components";


import FacebookIcon1 from '@mui/icons-material/Facebook';
import TelegramIcon2 from '@mui/icons-material/Telegram';
import InstagramIcon3 from '@mui/icons-material/Instagram';
import YouTubeIcon4 from '@mui/icons-material/YouTube';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Checkbox } from "@mui/material";

export const  Checkbox1 = styled(Checkbox)`
    /* background: linear-gradient(darkblue, purple)!important; */
    @media (max-width: 420px) {
        margin: 0px 10px 0px 0px;
    }
    
`
export const  Chediv = styled.div`
    width: 22px;
    height: 22px;
    border: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 420px ) {
        margin-left: -5px;
    }
`
export const  Checboxdiv = styled.div`
    width: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    p{
        color: #ffffffaa;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 15.3767px;
        line-height: 168%;
        letter-spacing: 0.14em;
        flex: none;
        order: 1;
        flex-grow: 0;
        @media (max-width: 420px) {
        letter-spacing: 0.5px;
        width: 220px;
    }
    }
    @media (max-width: 420px) {
        width: 250px;
        margin: 20px;
    }
`

export const EmailDiv = styled.div`
    width: 40px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(darkblue, purple);
`

export const Email = styled(EmailOutlinedIcon)`
    color: white !important;
    width: 25px !important;
    height: 100% !important;
    transform: skew(30deg);
`
export const FacebookIcon = styled(FacebookIcon1)`
    color: white;
`
export const TelegramIcon = styled(TelegramIcon2)`
    color: white;
`
export const InstagramIcon = styled(InstagramIcon3)`
    color: white;
`
export const YouTubeIcon = styled(YouTubeIcon4)`
    color: white;
`
export const Container = styled.div`
    width: 100%;
    height: 55%;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 990px) {
        height: 80%;
    }
    @media (max-width: 420px) {
        height: 130%;
    }
    
`
export const Alldiv = styled.div`
    width: 90%;
    height: 60%;
    display: flex;
    justify-content: space-between;
    @media (max-width: 990px){
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`
export const Left = styled.div`
    width: 150px;
    display: flex;
    align-items: center;
    flex-direction: column;
    @media (max-width: 500px) {
        margin: 20px;
    }
`
export const Leftword = styled.div`
    justify-content: center;
    align-items: center;
    @media (max-width: 1000px){
        margin-left: -40px;
    }
    @media (max-width: 990px) {
        width: 500px;
        display: flex;
        justify-content: space-between;
    }
    @media (max-width: 640px) {
        width: 300px;
    }
    @media (max-width: 420px){
        margin-left: -5px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
`
export const Word1 = styled.p`
    color: white;
    text-align: center;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 15.3767px;
    line-height: 40px;
    letter-spacing: 0.14em;
    flex: none;
    order: 0;
    flex-grow: 0;
`

export const Rightword = styled.div`
    @media (max-width: 990px) {
        width: 600px;
        display: flex;
        justify-content: space-between;
        margin: 20px;
    }
    @media (max-width: 640px) {
        width: 400px;
    }
    @media (max-width: 420px){
        width: 200px;
        margin-left: 15px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
`
export const Word2 = styled.p`
    color: white;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 15.3767px;
    line-height:30px;
    letter-spacing: 0.14em;
    flex: none;
    order: 0;
    flex-grow: 0;   
`
export const Right = styled.div`
    width: 500px;
    @media (max-width: 990px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    @media (max-width: 516px) {
        width: 350px;
    }
    @media (max-width: 371px) {
        width: 280px;
    }
`
export const Div = styled.div`
    width: 120px;
    display: flex;
    justify-content: space-between;
    margin: 10px;
`
export const Dcimg = styled.img`
    width: 130px;
    height: 100px;
`
export const Worddiv = styled.div`
    h4{
        color: #ffffff;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 16.3767px;
        line-height: 168%;
        letter-spacing: 0.14em;
        flex: none;
        order: 1;
        flex-grow: 0;
        @media (max-width: 990px) {
            text-align: center;
        }
        @media (max-width: 420px) {
            width: 200px;
            margin-left: 20px;
        }
    }
    p{
        color: #ffffffaa;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 12.3767px;
        line-height: 168%;
        letter-spacing: 0.14em;
        flex: none;
        order: 1;
        flex-grow: 0;
        @media (max-width: 990px) {
            text-align: center;
        }
        @media (max-width:520px) {
            width: 350px;
        }
        @media (max-width: 420px) {
            width: 250px;
            
        }
    }
`
export const Inputdiv = styled.div`
    width: 300px;
    height: 40px;
    border: 1px solid white;
    transform: skew(-30deg);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    input{
        width: 90%;
        background-color: rgb(0,0,0,0);
        border: none;
        outline: none;
        transform: skew(30deg);
        color: #ffffff9d;
        padding: 20px;
        font-size: 15px;
    }
    @media (max-width: 420px) {
        width: 75%;
    }
`

export const Endword = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 19.2653px;
    line-height: 168%;
    color: #FFFFFF;
    opacity: 0.3;
    @media (max-width: 500px) {
        margin: 40px 0px 0px 0px;
    }
    @media (max-width: 420px) {
        font-size: 17px;
    }
`
export const Enddiv = styled.div`
    display: flex;
    width: 100%;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;  
    
`
export const DIVV = styled.div`

`