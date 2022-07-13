import React, { useEffect, useState } from 'react'
import { Alldiv, Checboxdiv, Checkbox1, Chediv, Container, Dcimg, Div, DIVV, Email, EmailDiv, Enddiv, Endword, FacebookIcon, Inputdiv, InstagramIcon, Left, Leftword, Right, Rightword, TelegramIcon, Word1, Word2, Worddiv, YouTubeIcon } from './Footerstyle'

import Rasm from '../../images/Footerrasm.png'


import axios from 'axios'

const Api_game = 'http://159.65.207.213/api/game/'


const Footer = () => {

    const [game, setGame] = useState([])

    useEffect(() => {
      axios.get(Api_game).then((res)=>{
        setGame(res.data)
      })
    }, [])
    
    console.log(game);

  return (
    <DIVV>
        <Container>
        <Alldiv>
            <Left>
                <Dcimg src={Rasm} />
                <Div>
                    <FacebookIcon />
                    <TelegramIcon />
                    <InstagramIcon />
                    <YouTubeIcon />
                </Div>
            </Left>
            <Leftword>
                <Word1>Biz haqimizda</Word1>
                <Word1>Turnirlar</Word1>
                <Word1>Xisob</Word1>
                <Word1>Rasmlar</Word1>
            </Leftword>
            <Rightword>
                {
                    game?.map((item,index)=>{
                        return(
                            <Word2 key={index}>{item.name}</Word2>
                        )
                    })
                }
            </Rightword>
            <Right>
                <Worddiv>
                    <h4>Bizning axborot byulletenimizga obuna bo'ling</h4>
                    <p>Eng so'nggi yangilanishlar va maxsus takliflarni olishni xohlaysizmi, bizning haftalik xabarnomamizni olish uchun quyidagi elektron pochta manzilingizni kiriting.</p>
                </Worddiv>
                <Inputdiv>
                    <input placeholder='Your email' type="text" />
                    <EmailDiv>
                        <Email/>
                    </EmailDiv>
                </Inputdiv>
                <Checboxdiv>
                    <Chediv>
                        <Checkbox1/>
                    </Chediv>
                    <p>I accept newsteller terms</p>
                </Checboxdiv>
            </Right>
        </Alldiv>
    </Container>
        <Enddiv>
        <Endword>Copyright by Digital City 2022</Endword>
        </Enddiv>
    </DIVV>
  )
}

export default Footer