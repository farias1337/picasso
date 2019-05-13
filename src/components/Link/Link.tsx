import React, {
  MouseEvent,
  FunctionComponent,
  ReactNode,
  ElementType
} from 'react'
import MUILink, { LinkProps } from '@material-ui/core/Link'
import { withStyles } from '@material-ui/core/styles'
import cx from 'classnames'

import { StandardProps } from '../Picasso'
import styles from './styles'

type UnderlineType = 'none' | 'hover' | 'always'
type VariantType = 'action' | 'default'

interface Props extends StandardProps {
  /** Content of the component */
  children: ReactNode
  /** Destination the link points to */
  href?: string
  /** Controls when the link should have an underline */
  underline?: UnderlineType
  /** Callback invoked when component is clicked */
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   *
   * Currently doesn't support `button` value because of broken typings,
   * it's already fixed at `4.0.0-beta.2`
   * Please, remove this comment after upgrade
   */
  as?: ElementType<LinkProps>

  /** Either it's a regular link or an _action_ */
  variant?: VariantType
}

export const Link: FunctionComponent<Props> = ({
  href,
  underline,
  onClick,
  children,
  classes,
  className,
  style,
  as,
  variant
}) => {
  return (
    <MUILink
      href={href}
      underline={underline}
      onClick={onClick}
      className={cx(classes.root, className, {
        [classes.action]: variant === 'action'
      })}
      style={style}
      component={as}
    >
      {children}
    </MUILink>
  )
}

Link.defaultProps = {
  as: 'a',
  variant: 'default'
}

Link.displayName = 'Link'

export default withStyles(styles)(Link)
