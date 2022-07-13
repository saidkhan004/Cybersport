import React,{useEffect, useRef,useState} from 'react'
import { AvaCard, Avatar, CardTexts,FuncButton, Container, Link, LinkWr, Navbar, NavTitle, TeamCard, Teams, Wrapper, MediaLinks, MediaLink, Btn } from './style'

import Game1 from '../../images/Game1.png'
import Game2 from '../../images/Game2.png'
import Photos from '../../components/Photos/Photo'
import Fourthdiv from '../../components/Fourthdiv/Fourth'
import Login from '../Login/Login'
import axios from 'axios'

const Api_competition = 'http://159.65.207.213/api/competition/'
const Api_game = 'http://159.65.207.213/api/game/'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}


const Tournament = () => {

  // usestates 

  const [comp, setComp] = useState([])
  const [game, setGame] = useState([])
  const [category, setcategory] = useState('Все');


  console.log(comp);

  
  const [globalbolen, setglobalbolen] = useState(true)
  
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {

    

    axios.get(Api_game)
    .then(res=>{
      setGame(res.data)
      console.log("game",res.data);
    })

    function handleResize() {
      setWindowDimensions(getWindowDimensions());
      if(windowDimensions.width>768){
        setglobalbolen(false)
      }
    }
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setWindowDimensions]);

  useEffect(() => {
    axios.get(Api_competition)
    .then((res)=>{
      console.log('resdata',res.data);
      let filtered = res.data.filter((item)=>{
        if(item.game.name===category){
          return item
        }
        if(category === 'Все'){
          return item
        }
      });

      setComp(filtered);
      console.log('filtered',filtered);
      



    })
  }, [category,setcategory])
  
  

  console.log(windowDimensions);


  const openMenu = ()=>{
    setglobalbolen(!globalbolen)
  }




  

  return (
    <Wrapper>
        <Container>
            <Navbar>
                <NavTitle>Eng so'nggi turnirlar</NavTitle>
                <FuncButton onClick={openMenu}>Eng so'nggi turnirlar</FuncButton>

                <LinkWr bolen={globalbolen} >
                  <Link onClick={()=>setcategory('Все')}>Все</Link>
                    {
                      game?.map((item2,index2)=>{
                        return(
                          <Link key={index2} onClick={()=>setcategory(item2.name)}>{item2.name}</Link>
                        )
                      })
                    }
                </LinkWr>

            </Navbar>
            <Teams>

              {
                comp?.map((item,index)=>{
                  return(      
                    <TeamCard key={index}>
                      <AvaCard data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
                        <Avatar src={`http://159.65.207.213/${item.user1.img}`}/>
                        <h1>VS</h1>
                        <Avatar src={`http://159.65.207.213/${item.user2.img}`}/>
                      </AvaCard>
                      <CardTexts>
                        <h2>{`${item.user1.name} - ${item.user2.name} ${item.game.name}`}</h2>
                        <p>{item.data}</p>
                      </CardTexts>
                    </TeamCard>
                  )
                })
              }


            </Teams>
            <Btn data-aos="zoom-in" class="custom-btn btn-5"><span>Ro'yxatdan o'tish</span></Btn>
        <Photos/>
        <Fourthdiv/>
        <Login/>
        </Container>
        
    </Wrapper>
  )
}

export default Tournament