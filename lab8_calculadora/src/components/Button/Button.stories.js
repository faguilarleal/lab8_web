import Button from './Button'
import { fn } from '@storybook/test'

const meta = {
  component: Button
}

export default meta

// text, handleClick, bcolor,wd 
export const Default = {
  args: {
    text: '',
    handleClick: fn(),
    bcolor: '',
    wd: ''
  }
}
