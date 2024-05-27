
import { fn } from '@storybook/test'
import Button from './Button'

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
        text: 'Clr',
        handleClick: fn(),
        bcolor: '#74342B',
        hcolor: '#FAD0DF',
        wd: '150px'
    }
}

// test for the clr button
export const IgualButton = {
  args: {
      text: '=',
      handleClick: fn(),
      bcolor: '#74342B',
      hcolor: '#FAD0DF',
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

