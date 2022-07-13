import React from 'react'
import { Container, Images, Images2, ImagesBorder, Imgs, Item1, Item10, Item2, Item3, Item4, Item5, Item6, Item7, Item8, Item9, Items, Items2, Word, Words } from './Photostyle'

import Img1 from '../../images/Img1.png'
import Img2 from '../../images/Img2.png'
import Img3 from '../../images/Img3.png'
import Img4 from '../../images/Img4.png'
import Img5 from '../../images/Img5.png'
import Img6 from '../../images/Img6.png'
import Img7 from '../../images/Img7.png'
import Img8 from '../../images/Img8.png'
import Img9 from '../../images/Img9.png'
import Img10 from '../../images/Img10.png'


const Photo = () => {
  return (
    <Container>
        <Words>
            <Word>Fotogalereya</Word>
        </Words>
        <Images>
              <Items>
                <ImagesBorder>
                  <Item1 src={Img1}/>
                  <Item2 src={Img2}/>
                  <Item3 src={Img3}/>
                  <Item4 src={Img4}/>
                  <Item5 src={Img5}/>
                  <Item6 src={Img6}/>
                  <Item7 src={Img7}/>
                  <Item8 src={Img8}/>
                  <Item9 src={Img9}/>
                  <Item10  src={Img10}/>
                </ImagesBorder>
              </Items>
        </Images>
        <Items2>
            <Images2>
                <Imgs src={Img1}/>
                <Imgs src={Img2}/>
                <Imgs src={Img3}/>
                <Imgs src={Img8}/>
                <Imgs src={Img9}/>
            </Images2>
        </Items2>
    </Container>
  )
}

export default Photo