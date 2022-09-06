import styled from "styled-components"
import {defaultTheme,typeScale} from '../../utilities'
import {modalOne} from '../../assets/images'
import BtnPrimary  from '../header/components/buttons'
import CloseIcon from "../../assets/icons/Close"
const Wrapper = styled.div`
width:800px;
height:700px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
position:relative;
margin:auto;
margin-top:2rem;
box-shadow: 5px 3px 9px rgba(0, 0, 0, 0.35);
`
const Header = styled.h2`
color:${defaultTheme.textColor};
font-size:${typeScale.header2}
`

const Text = styled.p`
font-size:${typeScale.paragraph}
`
const CloseContainer = styled.div`
position:absolute;
top:40px;
right:40px;
width:40px;
`
const  Modal = ()=>{
    return(
        <Wrapper>
            <img src={modalOne} aria-hidden="true" alt="login image"/>
            <Header>Login Here And Now !</Header>
            <Text>You will have amazing content now please login</Text>
            <BtnPrimary BaseColor={defaultTheme.primaryHoverColor} color="white" border>hello world</BtnPrimary>
            <CloseContainer><CloseIcon/></CloseContainer>
        </Wrapper>
       
    )
}

export default Modal