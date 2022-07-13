import styled from "styled-components";

import Rasm2 from '../../images/photo1.png'




export const Main = styled.div`
background: url(${Rasm2}) fixed center;
background-repeat: no-repeat;
background-size: cover;
width: 100%;
height: 100vh;
@media (max-width: 360px) {
    height: 80vh;
}
`

export const MainBg = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const WelcTag = styled.p`
text-align:center ;
font-family: 'Russo One';
font-style: normal;
font-weight: 400;
font-size: 55px;
line-height: 101px;
text-align: center;
letter-spacing: 0.14em;
color: white;
text-transform: uppercase;
@media (max-width: 1200px){
    font-size: 45px;
    line-height: 90px;
}
@media (max-width: 1050px){
    font-size: 40px;
    line-height: 80px;
}
@media (max-width: 860px){
    font-size: 30px;
}
@media (max-width: 660px){
    font-size: 25px;
}
@media (max-width: 530px){
    font-size: 30px;
    width: 500px;
    text-align: center;
}
@media (max-width: 510px){
    line-height: 70px;
    font-size: 25px;
    width: 350px;
}
@media (max-width: 360px){
    font-size: 22px;
    line-height: 50px;
    width: 320px;
}
@media (min-width: 319px) and (max-width: 339px) {
    width: 299.5px;
}

`
export const SpanWlc = styled.span`
color : purple ;
`

