import { Theme, createStyles } from '@material-ui/core/styles'

import { PicassoProvider } from '../Picasso'

PicassoProvider.override(() => ({
  MuiLink: {
    root: {
      cursor: 'pointer'
    }
  }
}))

export default ({ typography, palette }: Theme) =>
  createStyles({
    action: {
      fontWeight: typography.fontWeights.semibold
    },

    invert: {
      color: palette.common.white
    }
  })
