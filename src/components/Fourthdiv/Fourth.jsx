import React, { useEffect, useState } from 'react'
import { Container, Div, Thirddiv } from './Fourthstyle'
import axios from 'axios'
const Api_number = 'http://159.65.207.213/api/number/'

const Fourth = () => {

    const [number, setNumber] = useState([])

    useEffect(() => {
      axios.get(Api_number).then((res)=>{
        setNumber(res.data);
      })
    }, [])
    

  return (
    <Container>
        <Div>

            {
                number?.map((item,index)=>{
                    return(
                        <Thirddiv key={index} data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom">
                            <h1>{item.number}</h1>
                            <p>{item.text}</p>
                        </Thirddiv>
                    )
                })
            }

        </Div>
    </Container>
  )
}

export default Fourth