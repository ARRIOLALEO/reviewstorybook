import styled from 'styled-components'
import { typeScale,defaultTheme } from '../../../../utilities'
import {applyStyleModifiers} from 'styled-components-modifiers'

const BTN_MODIFIERS = {
    small:()=>`
    font-size:${typeScale.helperText};
    padding: 6px;
    `,
    big:()=>`
    font-size:${typeScale.header4};
    padding:12px 24px;
    `,
  warning: () => `
    background: none;
    color: ${defaultTheme.status.warningColor};
    &:hover, &:focus {
      background-color: ${defaultTheme.status.warningColorHover};
      outline: 3px solid ${defaultTheme.status.warningColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    },

    &:active {
      background-color: ${defaultTheme.status.warningColorActive};
    }
  `,
  primaryButtonWarning: () => `
    background-color: ${defaultTheme.status.warningColor};
    color: ${defaultTheme.textColorInverted};
  `,
  secondaryButtonWarning: () => `
    border: 2px solid ${defaultTheme.status.warningColor};
  `,
  error: () => `
    background: none;
    color: ${defaultTheme.status.errorColor};
    &:hover, &:focus {
      background-color: ${defaultTheme.status.errorColorHover};
      outline: 3px solid ${defaultTheme.status.errorColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${defaultTheme.status.errorColorActive};
    }
  `,
}

const BaseButton = styled.button`
padding:12px 24px;
background:${props=> props.BaseColor};
border:${props=> props.border ? "solid 1px":null};
border-color:${props=> props.borderColor ? props.borderColor:null};
`

const PrimaryButton = styled(BaseButton)`
color: ${props=> props.color};
&:hover{
    background: green;
};
${applyStyleModifiers(BTN_MODIFIERS)}
`


export default PrimaryButton
