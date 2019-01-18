import { PicassoProvider } from '../Picasso'
import pallete from '../Picasso/pallete'

PicassoProvider.override(() => ({
  MuiCheckbox: {
    root: {
      fontSize: '1em',
      lineHeight: '1em',
      padding: 0,
      margin: '0.25em 0.5em',

      '&$disabled': {
        cursor: 'not-allowed',
        pointerEvents: 'auto'
      }
    },
    disabled: {
      opacity: 0.5
    }
  }
}))

export default {
  root: {
    '&:hover $uncheckedIcon': {
      border: `1px solid ${pallete.primary.main}`
    }
  },
  disabled: {
    '&:hover $uncheckedIcon': {
      border: `1px solid ${pallete.grey[50]}`
    }
  },
  checkedIcon: {
    height: '1em',
    width: '1em',
    transition: 'all .1s ease',
    background: pallete.primary.main,
    border: `1px solid ${pallete.primary.dark}`
  },
  uncheckedIcon: {
    height: '1em',
    width: '1em',
    transition: 'all .1s ease',
    background: pallete.common.white,
    border: `1px solid ${pallete.grey[50]}`
  },
  indeterminateIcon: {
    height: '1em',
    width: '1em',
    transition: 'all .1s ease',
    background: pallete.primary.main,
    border: `1px solid ${pallete.primary.dark}`
  }
}
