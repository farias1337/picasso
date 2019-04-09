import React, { FunctionComponent } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import CloseIcon from '@material-ui/icons/Close'

import ModalTitle from '../ModalTitle'
import ModalContent from '../ModalContent'
import ModalActions from '../ModalActions'
import { Classes } from '../styles/types'
import styles from './styles'

type ContainerValue = () => HTMLElement | HTMLElement

interface StylesProps {
  classes: Classes
}

interface Props {
  /** Whether modal should be displayed */
  open: boolean
  /** Callback executed when backdrop was clicked */
  onBackdropClick?: () => void
  /** Callback executed when attempting to close modal */
  onClose?: () => void
  /** Callback executed when modal is being opened */
  onOpen?: () => void
  /** A node, component instance, or function that returns either. The container will have the portal children appended to it. */
  container?: ContainerValue
  /** If `true`, the backdrop is not rendered */
  hideBackdrop?: boolean
  transitionDuration?: number
}

interface StaticProps {
  Content: typeof ModalContent
  Actions: typeof ModalActions
  Title: typeof ModalTitle
}

export const Modal: FunctionComponent<Props & StylesProps> &
StaticProps = props => {
  const {
    children,
    open,
    onBackdropClick,
    onClose,
    onOpen,
    classes,
    container,
    hideBackdrop,
    transitionDuration
  } = props
  const { closeButton, ...restClasses } = classes

  return (
    <Dialog
      classes={restClasses}
      container={container}
      PaperProps={{ elevation: 2 }}
      hideBackdrop={hideBackdrop}
      onBackdropClick={onBackdropClick}
      onClose={onClose}
      onEnter={onOpen}
      open={open}
      transitionDuration={transitionDuration}
    >
      {onClose && <CloseIcon className={closeButton} onClick={onClose} />}
      {children}
    </Dialog>
  )
}

Modal.defaultProps = {
  hideBackdrop: false,
  transitionDuration: 300
}

Modal.Content = ModalContent

Modal.Actions = ModalActions

Modal.Title = ModalTitle

export default withStyles(styles)(Modal) as FunctionComponent<Props> &
  StaticProps
