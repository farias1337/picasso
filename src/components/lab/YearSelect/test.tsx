import React from 'react'
import { render, cleanup } from 'react-testing-library'

import Picasso from '../../Picasso'
import YearSelect from './YearSelect'

afterEach(cleanup)

// Mock console error since toThrow() outputs the error message with stacktrace
let mockedConsoleError: any

beforeEach(() => {
  mockedConsoleError = jest.spyOn(console, 'error')
  mockedConsoleError.mockImplementation(() => {})
})

afterEach(() => {
  mockedConsoleError.mockRestore()
})

describe('YearSelect', () => {
  test('default render', () => {
    const { container } = render(
      <Picasso loadFonts={false}>
        <YearSelect from={2001} to={2005} onChange={() => {}} />
      </Picasso>
    )

    expect(container).toMatchSnapshot()
  })

  test('wrong range', () => {
    let from: number | null, to: number | null

    const errorMessage = () =>
      `Invalid range. Please check the values you have passed: from: ${from}, to: ${to}`

    // casting is needed to trick typescript and pass null
    const tryRender = () =>
      render(
        <Picasso loadFonts={false}>
          <YearSelect
            onChange={() => {}}
            from={from as number}
            to={to as number}
          />
        </Picasso>
      )

    from = null
    expect(tryRender).toThrow(errorMessage())

    to = null
    expect(tryRender).toThrow(errorMessage())

    from = 11
    to = 10
    expect(tryRender).toThrow(errorMessage())
  })
})
