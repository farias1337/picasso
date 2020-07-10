import React, { forwardRef, ReactNode, TableHTMLAttributes } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import MUITable from '@material-ui/core/Table'
import {
  BaseProps,
  PicassoComponentWithRef,
  CompoundedComponentWithRef
} from '@toptal/picasso-shared'

import TableCell from '../TableCell'
import TableBody from '../TableBody'
import TableRow from '../TableRow'
import TableHead from '../TableHead'
import TableSectionHead from '../TableSectionHead'
import TableFooter from '../TableFooter'
import TableExpandableRow from '../TableExpandableRow'
import styles from './styles'

export interface Props
  extends BaseProps,
    TableHTMLAttributes<HTMLTableElement> {
  /** Children components (`Table.Head`, `Table.Body`, `Table.Footer`) */
  children: ReactNode
}

interface StaticProps {
  Head: typeof TableHead
  SectionHead: typeof TableSectionHead
  Body: typeof TableBody
  Row: typeof TableRow
  Cell: typeof TableCell
  Footer: typeof TableFooter
  ExpandableRow: typeof TableExpandableRow
}

const useStyles = makeStyles<Theme, Props>(styles, {
  name: 'Table'
})

// eslint-disable-next-line react/display-name
export const Table = forwardRef<HTMLTableElement, Props>(function Table(
  props,
  ref
) {
  const classes = useStyles(props)
  const { className, style, children, ...rest } = props

  return (
    <MUITable
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      ref={ref}
      classes={classes}
      className={className}
      style={style}
    >
      {children}
    </MUITable>
  )
}) as CompoundedComponentWithRef<Props, HTMLTableElement, StaticProps>

Table.defaultProps = {}

Table.displayName = 'Table'

Table.Body = TableBody

Table.Cell = TableCell

Table.Body = TableBody

Table.Head = TableHead

Table.SectionHead = TableSectionHead

Table.Row = TableRow

Table.ExpandableRow = TableExpandableRow

Table.Footer = TableFooter

export default Table as PicassoComponentWithRef<
  Props,
  HTMLTableElement,
  StaticProps
>
