import React,{useState,useEffect} from 'react'
import { Container, Div, FirstImg, Firstword, Middle, Table, Word, Wordfirst, Words } from './Secondstyle'
import Comphoto from '../../images/rasm1.png'

import axios from 'axios'

const Api_blog = 'http://159.65.207.213/api/blog/'

const Second = () => {

    const [first, setfirst] = useState([])

    useEffect(() => {
        axios.get(Api_blog).then((res)=>{
            setfirst(res.data);
        })
    }, [])

    console.log(first);
    

  return (
    <Container>
        <Words data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
            <Word>Digital City - bu 2019 yilda tashkil etilgan <br /> professional o'yin tashkiloti.— <br /> Bizning maqsadimiz butun dunyodagi <br /> eng iqtidorli kisport o'yinchilarni birlashtirishdir.</Word>
        </Words>
        <Table data-aos="fade-up"
     data-aos-duration="1000">

            {
                first?.map((item,index)=>{
                    return(
                        <Middle key={index}>
                            <FirstImg src={`http://159.65.207.213/${item.image}`} />
                            <Div>
                            <Firstword>{item.title}</Firstword>
                            <Wordfirst>{item.text}</Wordfirst>
                            </Div>
                        </Middle>
                    )
                })
            }

        </Table>
    </Container>
  )
}

export default Second