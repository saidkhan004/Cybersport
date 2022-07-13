// import axios from 'axios';
// import React,{useState} from 'react'
// import { Alldiv, Allimagediv, Btn, Btnn, Bttn, Container, Div, Divbtn, Edit__img, Img_preview, Img__drop, Input, Input1, Input2, Inputdiv, Inputs, Inputt, Label, Logindiv, Select1, Word } from './Loginstyle'
// import AvatarLogo from '../../images/AvatartLogo.png'

// const Login = () => {

//   const [category, setCategory] = useState('solo')

// // const [Img1,SetImg1]
// const [Img1, setImg1] = useState('')
// const [backimage, setbackimage] = useState('')

// const SETImage = (e) => {
//   const rasm = e.target.files[0]
//   setbackimage(rasm)
//   setImg1(URL.createObjectURL(rasm))
// }
// //Player 1 One game useState

// const [Isim, setIsim] = useState("");
// const [Surname, setSurname] = useState("");
// const [Email, setEmail] = useState("");
// const [Opit, setOpit] = useState("");
// const [To, setTo] = useState("");
// const [Naprarvleniya, setNapravleniya] = useState(0);
// const [Phone, setPhone] = useState("");


// //Player 2 Game useState
// const [Isim2, setIsim2] = useState("");
// const [Surname2, setSurname2] = useState("");
// const [Email2, setEmail2] = useState("");
// const [Opit2, setOpit2] = useState("");
// const [To2, setTo2] = useState("");
// const [Naprarvleniya2, setNapravleniya2] = useState(0);
// const [Phone2, setPhone2] = useState("");
// const [Img , SETImg] = useState('')



// const [catigory1, setcatigory1] = useState('onegame')
// //Data API 1 User1___________________________
// let DATAMAIN = new FormData()
// DATAMAIN.append('player_type', 1)
// DATAMAIN.append('name', Isim)
// DATAMAIN.append('surname', Surname)
// DATAMAIN.append('email', Email)
// DATAMAIN.append('experience_from', Opit)
// DATAMAIN.append('experience_to', To)
// DATAMAIN.append('game', Naprarvleniya)
// DATAMAIN.append('phone', Phone)
// DATAMAIN.append('img',Img)
// DATAMAIN.append('team_member',1)

// //Data API 1 User2__________________________

// let DATAMAIN2 = new FormData()
// DATAMAIN2.append('player_type',2)
// DATAMAIN2.append('name',Isim2)
// DATAMAIN2.append('email',Email2)
// DATAMAIN2.append('experience_from', Opit2)
// DATAMAIN2.append('experience_to',To2)
// DATAMAIN2.append('game',Naprarvleniya2)
// DATAMAIN2.append('phone',Phone2)
// DATAMAIN2.append('img',backimage)
// DATAMAIN2.append('team_member',Surname2)

// const OneGameSubmit = () => {
// console.log(Img)
//     try {
//       axios.post('http://159.65.207.213/api/user/', DATAMAIN)
//         .then((res) => {
//           console.log(res);
//           setIsim('')
//           setSurname('')
//           setEmail('')
//           setOpit('')
//           setTo('')
//           setPhone('')
//         })
//     } catch (err) {
//       console.log(err);
  
//     }



// //_________________________________________________________________________
//   console.log(Img)
//   try {
//     axios.post('http://159.65.207.213/api/user/', DATAMAIN2)
//       .then((res) => {
//         console.log(res);
//         // setOpen1(true)
//         setIsim2('')
//         setSurname2('')
//         setEmail2('')
//         setOpit2('')
//         setTo2('')
//         setPhone2('')
//       })
//   } catch (err) {
//     console.log(err);
//   }

// }







//   return (
//     <Container>
//         <Logindiv>
//             <Word>Регистрация</Word>
//             <Div>
//             <Divbtn>
//                 <Btn 
//                 onClick={()=>setCategory('solo')}
//                 style={{border:category==='solo'?'2px solid rgba(87,87,241,0.663)':''}}
//                 class="custom-btn btn-5"><span>Один игрок</span></Btn>
//                 <Btn
//                 onClick={()=>setCategory('squad')}
//                 style={{border:category==='squad'?'2px solid rgba(87,87,241,0.663)':''}}
//                 >Команда</Btn>
//             </Divbtn>
//             </Div>


//           <Allimagediv>
//             <Edit__img>
//               <Img_preview>
//                 {
//                   Img1 === '' ?
//                   <img src={AvatarLogo} alt="" />

//                   :

//                   <img src={Img1} alt="" />
//                 }
//               </Img_preview>
//               <Img__drop for="img_upload" className="img__drop">
//                 <span>Fayl yuklang</span>
//                 <input
//                   type="file"
//                   onChange={(e) => SETImage(e)}
//                   name=""
//                   hidden
//                   id="img_upload"
//                 />
//                 <p>Avatar yuklang</p>
//                 {/* onChange={(e) => setEmail(e.target.value)} */}
//               </Img__drop>
//             </Edit__img>
//           </Allimagediv>


      

//           <Alldiv>
//             {
//               category==="solo"?
//               <Inputdiv>

//               <Input1>
//               <label htmlFor="">Имя</label>
//                 <Input type="text" value={Isim} onChange={(e) => setIsim(e.target.value)} />
//                 <label htmlFor="">Фамилия</label>
//                 <Input type="text"  value={Surname} onChange={(e) => setSurname(e.target.value)} />
//                 <label htmlFor="">Почта</label>
//                 <Input type="email" value={Email} onChange={(e) => setEmail(e.target.value)} />
//               </Input1>
//               <Input2>
//                 <label htmlFor="">Опыт</label>

//               <Inputs>
//                 <Inputt type="number" placeholder='От' value={Opit} onChange={(e) => setOpit(e.target.value)} />
//                 <Inputt type="number" placeholder='До' value={To} onChange={(e) => setTo(e.target.value)} />
//               </Inputs>

//                 <label htmlFor="">Направления</label>
//                 <Input type="text" />
                
//                 <label htmlFor="">Телефон</label>
//                 <Input value={Phone} onChange={(e) => setPhone(e.target.value)} />
//               </Input2>
//             </Inputdiv>

//             :

//             <Inputdiv>
//               <Input1>
//               <label htmlFor="">Названия</label>
//                 <Input value={Isim2} onChange={(e) => setIsim2(e.target.value)} />
//                 <label htmlFor="">Число игроков</label>
//                 <Input  value={Surname2} onChange={(e) => setSurname2(e.target.value)} />
//                 <label htmlFor="">Почта Лидера</label>
//                 <Input  type="email" value={Email2} onChange={(e) => setEmail2(e.target.value)}  />
//               </Input1>
//               <Input2>
//                 <label htmlFor="">Опыт</label>

//               <Inputs>
//                 <Inputt  type="number" placeholder='От' value={Opit2} onChange={(e) => setOpit2(e.target.value)} />
//                 <Inputt type="number" placeholder='До'  value={To2} onChange={(e) => setTo2(e.target.value)} />
//               </Inputs>

//                 <label htmlFor="">Направления</label>
//                 <Input type="text" />
                

//                 <label htmlFor="">Телефон Лидера </label>
//                 <Input  value={Phone2} onChange={(e) => setPhone2(e.target.value)}  />
//               </Input2>
//               </Inputdiv>
//               }
//           </Alldiv>
//           <Bttn>
//           <Btnn class="custom-btn btn-5"><span>Отправить</span></Btnn>
//           </Bttn>

//         </Logindiv>
//     </Container>
//   )
// }

// export default Login


import React, { useEffect, useState } from 'react'
import {BotomDIv, ButonsDiv,
  Data, Edit__img,  ForstInpDiv,  Img_preview, Img__drop, InpDiv, Input, InputDiv,
  LabelText, LabelVSInputDiv,  MainDiv, MuiButtons1, MuiButtons2,
   OneInpDiv, OneVSTwoDIv,
  RegisterText,  SecondInpDiv, Select1, SendButton, SendButtonDiv,
   TopDIv, TwoInpDiv, TwoInputDiv,  } from './Loginstyle'
// import styles from '../Tournament/INP/style.module.css'

import AvatarLogo from '../../images/AvatartLogo.png'


import axios from 'axios'


const API = 'http://159.65.207.213/api/competition/'
const APIgame = 'http://159.65.207.213/api/game/'
const APInumber = 'http://159.65.207.213/api/number/'
const API1 = 'http://159.65.207.213/api/email/'


const Tournament = () => {
  
  
  //useStates
  const [data, setData] = useState([]) // 1
  const [category, setCatigory] = useState('Все')
  const [GameCategory, setGameCategory] = useState([])
  const [numberr, setNumberr] = useState([])
  const [Img, setImg] = useState("");

  //input rasm quyish
  const [Img1, SettingImg] = useState('');
  // const [ImgtoBackend, setImgtoBackend] = useState(null)

  const SEtImg = (e) => {
    const rasm = e.target.files[0]
    setImg(rasm)
    SettingImg(URL.createObjectURL(rasm))
  }



  useEffect(() => {
    axios.get(API)
      .then(res => {

        let Filtred = res.data.filter((item) => {
          if (item.game.name === category) {
            return item
          }
          if (category === 'Все') {
            return item
          }
        })

        setData(Filtred)
        // console.log('Game', res.data);
      })

    //APIgame axios
    axios.get(APIgame)
    .then(res=>{
    setGameCategory(res.data)
    console.log('GameCategory', res.data);
    })


    //APInumber axios
    axios.get(APInumber)
    .then(res=>{
      setNumberr(res.data)
      console.log(res.data);
    })

  }, [category,setCatigory])
  

  

//Player 1 One game useState

  const [Isim, setIsim] = useState("");
  const [Surname, setSurname] = useState("");
  const [Email, setEmail] = useState("");
  const [Opit, setOpit] = useState("");
  const [To, setTo] = useState("");
  const [Naprarvleniya, setNapravleniya] = useState(0);
  const [Phone, setPhone] = useState("");


  // console.log();
  const [catigory1, setcatigory1] = useState('onegame')
  // const [data1, setData1] = useState([])

  let DATAMAIN = new FormData()
  DATAMAIN.append('player_type', 2)
  DATAMAIN.append('name', Isim)
  DATAMAIN.append('surname', Surname)
  DATAMAIN.append('email', Email)
  DATAMAIN.append('experience_from', 2)
  DATAMAIN.append('experience_to', 5)
  DATAMAIN.append('game', 1)
  DATAMAIN.append('phone', 21312312)
  DATAMAIN.append('img',Img)
  DATAMAIN.append('team_member',4)



  const OneGameSubmit = () => {
  console.log(Img)
    try {
      axios.post('http://159.65.207.213/api/user/', DATAMAIN)
        .then((res) => {
          console.log(res);

        })
    } catch (err) {
      console.log(err);
    }
  }


return (

  <MainDiv>
{/* ========================= Register Page start =========================================== */}

  <InpDiv >
    <InputDiv>

      <TopDIv>
        <RegisterText>Регистрация</RegisterText>
          <ButonsDiv>
            <MuiButtons1 onClick={() => setcatigory1('onegame')} variant='outlined' style={{
            backgroundColor: catigory1 === 'onegame' ? '#724edf' : '#200A50'}}>Один игрок</MuiButtons1>

            <MuiButtons2 onClick={() => setcatigory1('command')} variant='outlined' style={{ backgroundColor: catigory1 === 'command' ? '#724edf ' : '#200A50' }}>Команда</MuiButtons2>
          </ButonsDiv>
      </TopDIv>
      {/* <Inputlar/> */}
      <Edit__img>
        <Img_preview>
          {
            Img === '' ?
            <img src={AvatarLogo} alt="" />

            :

            <img src={Img1} alt="" />
          }
        </Img_preview>
        <Img__drop for="img_upload" className="img__drop">
          <span>Fayl yuklang</span>
          <input
            type="file"
            onChange={(e) => SEtImg(e)}
            name=""
            hidden
            id="img_upload"
          />
          <p>Avatar yuklang</p>
          {/* onChange={(e) => setEmail(e.target.value)} */}
        </Img__drop>
      </Edit__img>
          <BotomDIv>
            {
              catigory1 === 'onegame' ?
                <OneVSTwoDIv>
                  <OneInpDiv>
                    <LabelVSInputDiv >
                      <LabelText>Ism</LabelText>
                      <Input type="text" onChange={(e) => setIsim(e.target.value)} />
                      {/* <Input type="text" name='name' onChange={} */}
                    </LabelVSInputDiv>

                    <LabelVSInputDiv >
                      <LabelText>Familya</LabelText>
                      <Input type="text" onChange={(e) => setSurname(e.target.value)} />
                    </LabelVSInputDiv>

                    <LabelVSInputDiv >
                      <LabelText>Pochta</LabelText>
                      <Input type="email" onChange={(e) => setEmail(e.target.value)} />
                    </LabelVSInputDiv>

                  </OneInpDiv>

                  <TwoInpDiv>
                    <TwoInputDiv>

                      <ForstInpDiv>
                        <LabelText>Tajriba</LabelText>
                        <Input type="number" placeholder='От' onChange={(e) => setOpit(e.target.value)} />
                      </ForstInpDiv>

                      <SecondInpDiv>
                        <LabelText></LabelText>
                        <Input type="number" placeholder='До' onChange={(e) => setTo(e.target.value)} />
                      </SecondInpDiv>

                    </TwoInputDiv>

                    <LabelVSInputDiv >
                      <LabelText>Yo'nalishlar</LabelText>
                      {/* <Input /> */}
                      <Select1 onChange={(e) => setNapravleniya(e.target.value)} name="" id="">
                        {
                          GameCategory?.map((itim1,index1)=>{
                            return(
                        <option value={itim1.id}>{itim1.name}</option>

                            )
                          })
                        }

                        <option value="">DOTA 2</option>
                        <option value="">R6 SEGA</option>
                        <option value="">PUBG</option>

                      </Select1>
                    </LabelVSInputDiv>

                    <LabelVSInputDiv >
                      <LabelText>Telefon</LabelText>
                      <Input onChange={(e) => setPhone(e.target.value)} />
                    </LabelVSInputDiv>

                  </TwoInpDiv>
              </OneVSTwoDIv>

                :

              <OneVSTwoDIv>
                <OneInpDiv>
                  <LabelVSInputDiv >
                    <LabelText>Sarlavhalar</LabelText>
                    <Input />
                  </LabelVSInputDiv>

                  <LabelVSInputDiv >
                    <LabelText>O'yinchilar soni</LabelText>
                    <Input />
                  </LabelVSInputDiv>

                  <LabelVSInputDiv >
                    <LabelText>Rahbar pochtasi</LabelText>
                    <Input type="email" />
                  </LabelVSInputDiv>

                </OneInpDiv>

                  <TwoInpDiv>
                    <TwoInputDiv>

                      <ForstInpDiv>
                        <LabelText>Tajriba</LabelText>
                        <Input type="number" placeholder='От' />
                      </ForstInpDiv>

                      <SecondInpDiv>
                        <LabelText></LabelText>
                        <Input type="number" placeholder='До' />
                      </SecondInpDiv>

                    </TwoInputDiv>

                    <LabelVSInputDiv >
                      <LabelText>Yo'nalishlar</LabelText>
                      {/* <Input /> */}
                      <Select1 name="" id="">

                        <option value="">CS:GO</option>
                        <option value="">DOTA 2</option>
                        <option value="">R6 SEGA</option>
                        <option value="">PUBG</option>

                      </Select1>
                    </LabelVSInputDiv>

                    <LabelVSInputDiv >
                      <LabelText>Rahbarning telefon raqami</LabelText>
                      <Input />
                    </LabelVSInputDiv>

                  </TwoInpDiv>
                </OneVSTwoDIv>
          }

          <SendButtonDiv>
             <SendButton variant='contained' onClick={OneGameSubmit}>Yuborish</SendButton>
          </SendButtonDiv>

        </BotomDIv>
    </InputDiv>
  </InpDiv>


    </MainDiv>
  )
}

export default Tournament
