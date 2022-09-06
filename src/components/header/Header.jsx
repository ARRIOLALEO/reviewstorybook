import BtnPrimary  from './components/buttons'
import {defaultTheme} from "../../utilities"
function Header(){
    return(
        <>
        <BtnPrimary 
        BaseColor={ defaultTheme.primaryColor }
        color="white"
        border borderColor="blue"
        modifiers={['small',"error"]}
        >
         hello world
        </BtnPrimary>

        <BtnPrimary BaseColor={defaultTheme.primaryHoverColor} color="white" border>hello world</BtnPrimary>
        <BtnPrimary BaseColor={defaultTheme.primaryActiveColor} color="white" modifiers={['big']}>hello world</BtnPrimary>
        </>
    )
}


export default Header