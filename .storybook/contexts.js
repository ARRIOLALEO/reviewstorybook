import {ThemeProvider} from 'styled-components'
import {defaultTheme, darkTheme} from '../src/utilities'

export const contexts = [
    {
        icon:"box",// a icon displayed in the Storybook toolbar to control  props
        title:"Themes",// an unique name of contextual environment
        components:[ThemeProvider],
        params:[
            // and array of params contains a set of predefined 'props' for ` components`
            {
                name:"Default Theme",
                props:{
                    theme:defaultTheme,
                    default: true
                }
            },
            {
                name:"Dark Theme",
                props:{
                    theme: darkTheme
                }
            }
        ],
        options:{
            deep:true,// pass props deeply into all wrapping components
            disable: false,// disable this contextual environment completely
            cancelable: false //allow this contextual environment to be opt-out optionally in the toolbar
        }
    }
]