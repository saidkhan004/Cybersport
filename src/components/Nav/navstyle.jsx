import { Button, } from "@mui/material";
import styled from "styled-components";




export const Navcontainer = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0px;
    box-shadow: 0px 5px solid #1d1722;
    background-color: #2b1c35;  
    /* position: fixed */
`
export const Cyberimg = styled.img`
    width: 195px;
    height: 45px;
    margin-left: 60px;
    align-items: center;
    @media (max-width: 530px){
        margin-left: 20px;
    }
`
export const Ul = styled.div`
    width: 500px;
    display: flex;
    justify-content: space-around;
    margin-right: 30px;
    align-items: center;

    @media  (max-width: 1030px){
        display: none;
    }
    @media (max-width: 1130px){
        width: 380px;
    }
`
export const Btn = styled(Button)`
    width: 171px !important;
    height: 40px !important;
    background-color: #8F00FF !important;
    margin-right: 60px !important;
    align-items: center !important;
    font-size: 13px !important;
    :hover{
        color: #8F00FF !important;
        background-color: transparent !important;
        border: 1px solid #8F00FF;
    }
    @media (max-width: 660px){
        margin-right: 130px !important;
        width: 130px !important;
    }
    @media  (max-width: 1030px){
        display: none !important;
    }
`
export const Navtag = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Li = styled.p`
    align-items: center;
    color: white;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    /* line-height: 168%; */
    letter-spacing: 0.14rem;
    :hover{
        color: #8F00FF;
    }
`
