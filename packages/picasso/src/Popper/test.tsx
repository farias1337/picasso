import React, { useState, Fragment, FC, ReactNode, forwardRef } from 'react'
import { render, cleanup, act, fireEvent } from '@testing-library/react'
import Picasso from '@toptal/picasso-shared'

import Popper from './Popper'

afterEach(cleanup)

// eslint-disable-next-line react/display-name
const FakeRootNode = forwardRef<HTMLDivElement, { children?: ReactNode }>(
  (props, ref) => {
    const { children } = props

    return (
      <div ref={ref} role='root'>
        {children}
      </div>
    )
  }
)

const PicassoWithFakeRootNode: FC = ({ children }) => {
  return (
    <Picasso loadFonts={false} RootComponent={FakeRootNode}>
      {children}
    </Picasso>
  )
}

const PopperRenderer = () => {
  const [popoverIsOpen, setPopoverIsOpen] = useState(false)

  return (
    <Fragment>
      <button onClick={() => setPopoverIsOpen(true)} role='action'>
        Click
      </button>
      <Popper open={popoverIsOpen} anchorEl={document.body}>
        {'some children'}
      </Popper>
    </Fragment>
  )
}

test('default render', () => {
  const { getByRole } = render(<PopperRenderer />, { wrapper: PicassoWithFakeRootNode })

  act(() => {
    fireEvent.click(getByRole('action'))
  })

  const popper = getByRole('tooltip')
  const root = getByRole('root')

  expect(root).toContainElement(popper)
})
