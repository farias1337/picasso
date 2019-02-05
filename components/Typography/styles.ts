import { PicassoProvider } from '../Picasso'

const HEADING_LINE_HEIGHT = '1.25em'
const TEXT_HEIGHT = '1.5em'

PicassoProvider.override(() => ({
  MuiTypography: {
    h1: {
      fontSize: '2.25rem',
      lineHeight: HEADING_LINE_HEIGHT
    },
    h2: {
      fontSize: '1.75rem',
      lineHeight: HEADING_LINE_HEIGHT
    },
    h3: {
      fontSize: '1.25rem',
      lineHeight: HEADING_LINE_HEIGHT
    },
    h4: {
      fontSize: '1rem',
      lineHeight: HEADING_LINE_HEIGHT
    },
    h5: {
      fontSize: '0.875rem',
      lineHeight: HEADING_LINE_HEIGHT
    },
    h6: {
      fontSize: '0.75rem',
      lineHeight: HEADING_LINE_HEIGHT
    },
    caption: {
      fontSize: '0.75rem'
    }
  }
}))

export default () => ({
  large: {
    fontSize: '1.25rem',
    lineHeight: TEXT_HEIGHT
  },
  small: {
    fontSize: '0.875rem',
    lineHeight: TEXT_HEIGHT
  },
  thin: {
    fontWeight: 100
  },
  light: {
    fontWeight: 300
  },
  regular: {
    fontWeight: 400
  },
  semibold: {
    fontWeight: 600
  },
  bold: {
    fontWeight: 700
  }
})
