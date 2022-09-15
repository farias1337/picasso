import { Theme, createStyles } from '@material-ui/core/styles'
import { PicassoProvider } from '@toptal/picasso-provider'

PicassoProvider.override(({ palette }: Theme) => ({
  MuiTabs: {
    root: {
      position: 'relative',
      minHeight: 0,
    },
    vertical: {
      '& $indicator': {
        display: 'none',
      },
    },
    indicator: {
      backgroundColor: palette.blue.main,
      zIndex: 1,
    },
  },
}))

export default ({ palette }: Theme) =>
  createStyles({
    horizontal: {
      '&::after': {
        position: 'absolute',
        content: '""',
        bottom: 0,
        left: 0,
        right: 0,
        height: 1,
        backgroundColor: palette.grey.main,
        zIndex: 0,
      },
    },
    vertical: {},
  })
