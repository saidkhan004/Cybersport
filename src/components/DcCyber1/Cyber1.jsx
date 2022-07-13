import React from 'react'
import Nav from '../Nav/Nav'

import {Main, MainBg,WelcTag, SpanWlc} from './cyberstyle1'

const Cyber1 = () => {
  return (
    <Main>

      <MainBg style={{backgroundColor:' rgba(0, 0, 0, 0.7)'}} >
    <Nav/>
      <WelcTag data-aos="flip-up">KIBER SPORT O'YINI<br /> <SpanWlc>DC cyber</SpanWlc> GA <br /> XUSH KELIBSIZ</WelcTag>
      </MainBg>


    </Main>
  )
}

export default Cyber1