import React,{useEffect,useState} from 'react'
import CYBER from '../../images/cyber.png'
import { Cyberimg, Li, Navcontainer, Navtag, Ul, Btn, MenuBtn, BtnWrap } from './navstyle'
import Icontic from '../../components/Icontic/Icon'
import axios from 'axios'

const Api_info = 'http://159.65.207.213/api/info'


const Nav = () => {

  // states

  const [logo, setLogo] = useState({})

  useEffect(() => {
    axios.get(Api_info).then((res)=>{
      setLogo(res.data);
    })
  }, [])


  const Scrolling = (val) => {
    window.scrollTo({
      top:val,
      behavior:'smooth'
    })
  }
  

  return (
    <Navcontainer>
        <Cyberimg src={`http://159.65.207.213/${logo.logo}`} />
        <Navtag>
          <Ul>
            <Li onClick={()=>Scrolling(0)}>Biz haqimizda</Li>
            <Li onClick={()=>Scrolling(1800)}>Turnirlar</Li>
            <Li onClick={()=>Scrolling(3800)}>Xisob</Li>
            <Li onClick={()=>Scrolling(3000)}>Rasmlar</Li>
          </Ul>

            <Btn onClick={()=>Scrolling(4400)} variant="contained">
            Roʻyxatdan oʻtish
            </Btn>          
           
            <Icontic/>
        </Navtag>
            
    </Navcontainer>
  )
}

export default Nav