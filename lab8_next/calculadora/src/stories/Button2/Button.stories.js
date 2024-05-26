import Button from './Button'
import { fn } from '@storybook/test'

const meta = {
  component: Button
}

export default meta

// default button for the calculator
export const Default = {
  args: {
    text: '',
    handleClick: fn(),
    bcolor: ''
  }
}

// test for the clr button
export const ClrButton = {
    args: {
        text: 'Enter',
        handleClick: fn(),
        bcolor: '#EDDBC2',
        hcolor: '#FAD0DF',
        wd: '150px'
    }

}

// test for the clr button
export const plusButton = {
  args: {
      text: '+',
      handleClick: fn(),
      bcolor: '#FAD0DF',
  }
}

// test for the clr button
export const NumberButton = {
  args: {
      text: '3',
      handleClick: fn(),
      bcolor: '#FAD0DF',
  }
}

