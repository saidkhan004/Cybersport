// import styled from "styled-components";

// export const Container = styled.div`
//     width: 100%;
//     /* height: 50%; */
//     /* border: 1px solid red; */
//     display: flex;
//     justify-content: center;
//     align-items: center;
    
// `
// export const Logindiv = styled.div`
//     width: 60%;
//     height: auto;
//     border: double 0.3em transparent;
//     border-radius: 15px;
//     background: linear-gradient(rgba(27, 4, 79, 1), rgba(27, 4, 79, 1)),
//     linear-gradient(to right, rgba(218, 2, 255, 1), rgba(104, 225, 253, 1));
//     background-origin: border-box;
//     background-clip: content-box, border-box;
//     @media (max-width: 1318px){
//         margin-top: 100px;
//     }
//     @media (max-width: 659px){
//         margin-top: 700px;
//     }
//     @media (max-width: 1000px){
//         width: 70%;
//     }
//     margin: 80px;
// `
// export const Word = styled.p`
//     font-family: 'Russo One';
//     font-style: normal;
//     font-weight: 400;
//     font-size: 24px;
//     line-height: 168%;
//     letter-spacing: 0.14em;
//     color: #FFFFFF;
//     display: flex;
//     justify-content: center;
//     padding: 50px;
// `
// export const Div = styled.div`
//     width: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `
// export const Divbtn = styled.div`
//     width: 80%;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     p{
//         font-family: 'Russo One';
//         font-style: normal;
//         font-weight: 400;
//         font-size: 20px;
//         line-height: 168%;
//         letter-spacing: 0.14em;
//         color: #FFFFFF;
//     }
// `
// export const Btn = styled.button`
//     border-radius: 5px;
//     font-weight: 500;
//     background: transparent;
//     cursor: pointer;
//     transition: all 0.3s ease;
//     position: relative;
//     display: inline-block;
//     outline: none;
//     color: #fff;
//     width: 170px;
//     height: 46px;
//     line-height: 42px;
//     padding: 0;
//     border: none;
//     font-family: 'Russo One';
//     font-style: normal;
//     font-weight: 400;
//     font-size: 15px;
//     line-height: 168%;
//     letter-spacing: 0.14em;
//     color: #FFFFFF;
//     flex: none;
//     order: 0;
//     flex-grow: 0;
    
//     /* &:hover{
//         background: transparent;
//         box-shadow:none;
//     }
//     &::before,::after{
//         content:'';
//         position:absolute;
//         top:0;
//         right:0;
//         height:2px;
//         width:0;
//         background: linear-gradient(92.49deg, #AD00FF 14.3%, #00E0FF 100%);
//         transition:400ms ease all;
//     }
//     &::after{
//         right:inherit;
//         top:inherit;
//         left:0;
//         bottom:0;
//     }
//     &:hover::before,:hover::after{
//         width:100%;
//         transition:800ms ease all;
//     } */
// `
// export const Inputdiv = styled.div`
//     width: 80%;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     margin-top: 5px;
//     @media (max-width: 920px){
//         flex-direction: column;
//     }
// `
// export const Input1 = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
//     label{
//         color: white;
//         width: 300px;
//         font-family: 'Montserrat';
//         font-style: normal;
//         font-weight: 300;
//         font-size: 16px;  
//         line-height: 168%;
//         color: #FFFFFF;
//         opacity: 0.5;
//         @media (max-width: 1290px){
//         width: 250px;
//     }
//     @media (max-width: 1080px){
//         width: 210px;
//     }
//     }
// `
// export const Input2 = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;

//     label{
//         color: white;
//         width: 300px;
//         font-family: 'Montserrat';
//         font-style: normal;
//         font-weight: 300;
//         font-size: 16px;
//         line-height: 168%;
//         color: #FFFFFF;
//         opacity: 0.5;
//         @media (max-width: 1290px){
//         width: 250px;
//     }
//     @media (max-width: 1080px){
//         width: 210px;
//     }

//     }
// `
// export const Alldiv = styled.div`
//     width: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin-top: 50px;
// `
// export const Input = styled.input`
//     width: 300px;
//     height: 40px;
//     /* margin-top: 60px; */
//     background: none;
//     border: none;
//     border-bottom: 1px solid white;
//     outline: none;
//     color: white;
//     margin: 5px 0px;
//     padding-top: 15px;
//     font-size: 20px;
//     @media (max-width: 1290px){
//         width: 250px;
//     }
//     @media (max-width: 1080px){
//         width: 210px;
//     }
    
// `
// export const Inputs = styled.div`
//     width: 100%;
//     display: flex;
//     justify-content: space-between;
//     margin: 5px ;
// `
// export const Inputt = styled.input`
//     width: 140px;
//     height: 40px;
//     background: none;
//     border: none;
//     border-bottom: 1px solid white;
//     outline: none;
//     color: white;
//     font-family: 'Montserrat';
//     font-style: normal;
//     font-weight: 300;
//     font-size: 14px;
//     line-height: 168%;
//     color: rgba(255, 255, 255, 0.5);
//     @media (max-width: 1290px){
//         width: 110px;
//     }
//     @media (max-width: 1080px){
//         width: 80px;
//     }
// `

// export const Bttn = styled.div`
//     width: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding: 60px;
// `
// export const Btnn = styled.button`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     border-radius: 5px;
//     font-weight: 500;
//     background: transparent;
//     cursor: pointer;
//     transition: all 0.3s ease;
//     position: relative;
//     display: inline-block;
//     outline: none;
//     color: #fff;
//     width: 230px;
//     height: 40px;
//     font-size: 20px;
//     line-height: 42px;
//     padding: 0;
//     border: none;
//     background: #8F00FF;
//     font-family: 'Montserrat';
//     font-style: normal;
//     font-size: 18.2553px;
//     line-height: 22px;
//     text-align: center;
//     color: #FFFFFF;
//     flex: none;

//     &:hover{
//         background: transparent;
//         box-shadow:none;
//     }
//     &::before,::after{
//         content:'';
//         position:absolute;
//         top:0;
//         right:0;
//         height:2px;
//         width:0;
//         background: linear-gradient(92.49deg, #AD00FF 14.3%, #00E0FF 100%);
//         transition:400ms ease all;
//     }
//     &::after{
//         right:inherit;
//         top:inherit;
//         left:0;
//         bottom:0;
//     }
//     &:hover::before,:hover::after{
//         width:100%;
//         transition:800ms ease all;
//     }
// `
// export const  Allimagediv = styled.div`
//     width: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `

// export const  Edit__img = styled.div`
//     height: 130px;
//     display: flex;
//     width: 80%;
//     align-items: center;
//     justify-content: space-between;
//     grid-gap: 50px;
//     margin-top: 50px;
//     margin-bottom: 10px;
//     /* border: 1px solid red; */
//     @media (max-width:764px) {
//         display: flex;
//         flex-direction: column;
//         /* margin: 0px 0px 40px 0px; */
//         height: auto;
//     }
//   `
//   export const Img_preview = styled.div`
//     padding: 5px;
//     background: #AD00FF;
//     border-radius: 6.35338px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     height: 100%;
//     width: 140px;
//     img{
//       border-radius: 50%;
//       width: 125px;
//       height: 125px;
//       /* filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.15)) */
//     }
// `
// export const Img__drop = styled.label`
// border: 3px dashed #02B6EB;
// border-radius: 5px;
// flex-grow: 1;
// height: 100%;
// display: flex;
// align-items: center;
// justify-content: space-between;
// cursor: pointer;
// padding: 0px 50px 0px 30px;

// @media (max-width:764px) {
//     width: 100%;
//     height: 100px;
// }

// @media (max-width:541px) {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding: 0;
// }


// span{
//   font-style: normal;
//   font-weight: 300;
//   font-size: 24px;
//   line-height: 30px;
//   color: #808191;


//   @media (max-width:541px) {
//     display: none;
//   }
// }
// p{
//   font-style: normal;
//   font-weight: 400;
//   font-size: 16.8578px;
//   line-height: 21px;
//   color: #FFFFFF;
//   border: none;
//   outline: none;
//   /* background: linear-gradient(180deg, #03F5FF 0%, #02B6EB 100%); */
//   border-radius: 5px;
//   padding: 10px 30px;
//   background-color:
// #8F00FF ;
// }
// `




import styled from "styled-components";

//Mui import 
import Button from '@mui/material/Button';

export const MainDiv = styled.div`
    width: 100%;
    height: auto;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 30px 0px;
`



// Start Input registr page

export const InpDiv = styled.div`
    width: 100%;
    height: auto;
    /* border: 1px solid white; */
    margin-top: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
`

export const InputDiv = styled.div`
    width: 1160px;
    height: 100%;
    display: flex;
    border-radius: 20px !important;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 18px !important;
    background: linear-gradient(rgba(27, 4, 79, 1), rgba(27, 4, 79, 1)) padding-box,
    linear-gradient(45deg, rgba(173, 0, 255, 1), rgba(0, 224, 255, 1)) border-box;
    border: 3px solid transparent;
    backdrop-filter: blur(40px);

    @media (max-width:589px) {
        width: 100%;
    }
`

export const TopDIv = styled.div`
    width: 100%;
    height: 200px;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    margin: 0px 0px 40px 0px;
`


export const RegisterText = styled.div`
    width: 100%;
    height: 100px;
    /* border: 1px solid blue; */
    text-align: center;
    color: white;
    font-size: 33px;
    font-weight: 600;
    padding-top: 20px;
`

export const ButonsDiv = styled.div`
    width: 85%;
    height: 60px;
    /* border: 1px solid white; */
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const MuiButtons1 = styled.button`
    width: 230px !important;
    height: 60px !important;
    color: white !important;
    font-size: 23px !important;
    cursor: pointer;
    font-weight: 600 !important;
    border-radius: 8px !important;
    /* background: linear-gradient(rgba(27, 4, 79, 1), rgba(27, 4, 79, 1)) padding-box,
    linear-gradient(45deg, rgba(173, 0, 255, 1), rgba(0, 224, 255, 1)) border-box !important; */
    border: 3px solid transparent !important;
    backdrop-filter: blur(40px) !important;
    

    
    @media (max-width:468px) {
        font-size: 18px !important;
    }

    @media (max-width:393px) {
        font-size: 15px !important;
    }
`
export const MuiButtons2 = styled.button`
     width: 230px !important;
    height: 60px !important;
    color: white !important;
    cursor: pointer;
    font-size: 23px !important;
    font-weight: 600 !important;
    border-radius: 8px !important;
    /* background: linear-gradient(rgba(27, 4, 79, 1), rgba(27, 4, 79, 1)) padding-box,
    linear-gradient(45deg, rgba(173, 0, 255, 1), rgba(0, 224, 255, 1)) border-box !important; */
    border: 3px solid transparent !important;
    backdrop-filter: blur(40px) !important;

    
    @media (max-width:468px) {
        font-size: 18px !important;
    }

    @media (max-width:393px) {
        font-size: 15px !important;
    }
`

export const BotomDIv = styled.div`
    width: 85%;
    height: calc(100% - 172px);
    /* height: auto; */
    /* border: 1px solid brown; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width:564px) {
       width: 95%;
    }
`

export const OneVSTwoDIv = styled.div`
    width: 100%;
    height: 430px;
    display: flex;
    justify-content: space-between;

    @media (max-width:929px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: auto ;
    }
`


export const OneInpDiv = styled.div`
    width: 50%;
    height: 430px;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;

    @media (max-width:929px) {
        width: 80%;
    }

    @media (max-width:700px) {
        width: 100%;
    }
`


export const LabelVSInputDiv = styled.div`
    width: 100%;
    height: 80px;
    /* border: 1px solid gray; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const LabelText = styled.label`
    color: #aaaaaa;
    font-size: 19px;
`

export const Input = styled.input`
    width: 100%;
    height: 40px;
    border: none;
    border-bottom: 3px solid white;
    background-color: transparent;
    outline: none;
    padding: 10px;
    color: #aaaaaa;
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
`

//Two Inp Div start

export const TwoInpDiv = styled.div`
    width: 48%;
    height: 430px;
    /* border: 1px solid yellow; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;

    @media (max-width:929px) {
        width: 80%;
    }    

    @media (max-width:700px) {
        width: 100%;
    }
    
`


export const TwoInputDiv = styled.div`
    width: 100%;
    height: 80px;
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;
    
`

export const ForstInpDiv = styled.div`
    width: 48%;
    height: 100%;
    /* border: 1px solid white; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`



export const SecondInpDiv = styled.div`
    width: 48%;
    height: 100%;
    /* border: 1px solid white; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`

export const SendButtonDiv = styled.div`
    width: 100%;
    height: calc(100% - 430px);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
    margin-bottom: 100px;

` 

export const SendButton = styled(Button)`
    width: 304px !important;
    height: 52px !important;
    font-size: 18px !important;
    font-weight: 500 !important;
    background-color:#8F00FF !important;


    &:hover{
        background-color:#7000E0 !important;
    }
`

export const Select1 = styled.select`
    width: 100%;
    height: 50px;
    border: none;
    outline: none;
    background-color: transparent;
    border-bottom: 3px solid white;
    transition: 3s;

    cursor: pointer;
    color: gray;
    ::placeholder {
            color: red;
        }


    option {
       background-color: #3A156B;
       color: white;
       transition: 3s;
    }


`

// Send Image start ==================================================================================

export const  Edit__img = styled.div`
    height: 140px;
    display: flex;
    width: 85%;
    align-items: center;
    justify-content: space-between;
    grid-gap: 50px;
    margin-bottom: 40px;
    /* border: 1px solid red; */


    @media (max-width:764px) {
        display: flex;
        flex-direction: column;
        /* margin: 0px 0px 40px 0px; */
        height: auto;
    }
  `
  export const Img_preview = styled.div`
    padding: 5px;
    background: #AD00FF;
    border-radius: 6.35338px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 140px;
    img{
      border-radius: 50%;
      width: 125px;
      height: 125px;
      /* filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.15)) */
    }
`
export const Img__drop = styled.label`
border: 3px dashed #02B6EB;
border-radius: 5px;
flex-grow: 1;
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;
cursor: pointer;
padding: 0px 50px 0px 30px;

@media (max-width:764px) {
    width: 100%;
    height: 100px;
}

@media (max-width:541px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
}


span{
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 30px;
  color: #808191;


  @media (max-width:541px) {
    display: none;
  }
}
p{
  font-style: normal;
  font-weight: 400;
  font-size: 16.8578px;
  line-height: 21px;
  color: #FFFFFF;
  border: none;
  outline: none;
  /* background: linear-gradient(180deg, #03F5FF 0%, #02B6EB 100%); */
  border-radius: 5px;
  padding: 10px 30px;
  background-color:
#8F00FF ;
}

`

