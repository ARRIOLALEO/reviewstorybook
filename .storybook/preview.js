import { addDecorator } from "@storybook/react"
import{withContexts} from '@storybook/addon-contexts/react'
import {withKnobs} from '@storybook/addon-knobs'
import {withA11y} from '@storybook/addon-a11y'
import { contexts } from "./contexts"

export const parameters = {
  backgrounds: {
    values: [
      {
        name: 'Default Theme',
        value: '#ffffff',
        default:true
      },
      {
        name: 'Dark Theme',
        value: '#3b5998',
      },
    ],
  },
}

addDecorator(withContexts(contexts))
addDecorator(withKnobs)
addDecorator(withA11y)