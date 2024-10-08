import React from 'react'
import type { OmitInternalProps } from '@toptal/picasso-shared'
import { render } from '@toptal/picasso-test-utils'
import { InputMultilineAdornment } from '@toptal/picasso-input-adornment'

import { RichTextEditor } from './RichTextEditor'
import type { Props } from './RichTextEditor'
import LexicalEditor from '../LexicalEditor'
import { useCounter } from './hooks'

jest.mock('@toptal/picasso-utils', () => ({
  ...jest.requireActual('@toptal/picasso-utils'),
  usePropDeprecationWarning: jest.fn(),
  noop: jest.fn(),
}))
jest.mock('../LexicalEditor', () => {
  return {
    __esModule: true,
    default: jest.fn(() => <div>Mocked LexicalEditor</div>),
  }
})
jest.mock('@toptal/picasso-input-adornment', () => {
  return {
    __esModule: true,
    ...jest.requireActual('@toptal/picasso-input-adornment'),
    InputMultilineAdornment: jest.fn(() => (
      <div>Input Multiline Adornment</div>
    )),
  }
})

jest.mock('./hooks', () => {
  return {
    __esModule: true,
    useCounter: jest.fn(() => ({
      counterMessage: 'COUNTER_MESSAGE+1',
      counterError: null,
      handleCounterMessage: jest.fn(),
    })),
  }
})

const mockedLexicalEditor = LexicalEditor as jest.MockedFunction<
  typeof LexicalEditor
>
const mockedUseCounter = useCounter as jest.MockedFunction<typeof useCounter>
const mockedInputMultilineAdornment =
  InputMultilineAdornment as jest.MockedFunction<typeof InputMultilineAdornment>

const renderRichTextEditor = (props?: Partial<OmitInternalProps<Props>>) =>
  render(
    <RichTextEditor
      id='test-editor'
      placeholder='placeholder+1'
      testIds={{ wrapper: 'wrapper-test-id-1' }}
      {...props}
    />
  )
const handleCounterMessage = jest.fn()

describe('RichTextEditor', () => {
  beforeEach(() => {
    mockedUseCounter.mockReturnValue({
      counterMessage: 'COUNTER_MESSAGE+1',
      counterError: false,
      handleCounterMessage,
    })
    mockedInputMultilineAdornment.mockImplementation(() => (
      <div>Input Multiline Adornment</div>
    ))
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders active RichTextEditor', () => {
    renderRichTextEditor()

    expect(mockedLexicalEditor).toHaveBeenCalledWith(
      {
        disabled: false,
        id: 'test-editor',
        onChange: expect.any(Function),
        onFocus: expect.any(Function),
        onBlur: expect.any(Function),
        onTextLengthChange: handleCounterMessage,
        placeholder: 'placeholder+1',
        testIds: {
          wrapper: 'wrapper-test-id-1',
        },
        autoFocus: false,
      },
      {}
    )
    expect(mockedUseCounter).toHaveBeenCalledWith({
      minLength: undefined,
      maxLength: undefined,
      minLengthMessage: undefined,
      maxLengthMessage: undefined,
    })
  })

  describe('when disabled prop is true', () => {
    it('renders disabled RichTextEditor', () => {
      renderRichTextEditor({ disabled: true })

      expect(mockedLexicalEditor).toHaveBeenCalledWith(
        {
          disabled: true,
          id: 'test-editor',
          onChange: expect.any(Function),
          onFocus: expect.any(Function),
          onBlur: expect.any(Function),
          onTextLengthChange: handleCounterMessage,
          placeholder: 'placeholder+1',
          testIds: {
            wrapper: 'wrapper-test-id-1',
          },
          autoFocus: false,
        },
        {}
      )
    })
  })

  describe('when minLength, maxLength, minLengthMessage, maxLengthMessage props are passed', () => {
    const minLengthMessage = () => 'minLengthMessage+1'
    const maxLengthMessage = () => 'maxLengthMessage+1'

    describe('when counterError is true', () => {
      it('renders RichTextEditor with counter with error', () => {
        mockedUseCounter.mockReturnValueOnce({
          counterMessage: 'COUNTER_MESSAGE+1',
          counterError: true,
          handleCounterMessage,
        })

        renderRichTextEditor({
          minLength: 1,
          maxLength: 10,
          minLengthMessage,
          maxLengthMessage,
        })

        expect(mockedUseCounter).toHaveBeenCalledWith({
          minLength: 1,
          maxLength: 10,
          minLengthMessage,
          maxLengthMessage,
        })

        expect(mockedInputMultilineAdornment).toHaveBeenCalledWith(
          {
            error: true,
            children: 'COUNTER_MESSAGE+1',
          },
          {}
        )
      })
    })

    describe('when counterError is false', () => {
      it('renders RichTextEditor with counter without error', () => {
        mockedUseCounter.mockReturnValueOnce({
          counterMessage: 'COUNTER_MESSAGE+1',
          counterError: false,
          handleCounterMessage,
        })

        renderRichTextEditor({
          minLength: 1,
          maxLength: 10,
          minLengthMessage,
          maxLengthMessage,
        })

        expect(mockedUseCounter).toHaveBeenCalledWith({
          minLength: 1,
          maxLength: 10,
          minLengthMessage,
          maxLengthMessage,
        })

        expect(mockedInputMultilineAdornment).toHaveBeenCalledWith(
          {
            error: false,
            children: 'COUNTER_MESSAGE+1',
          },
          {}
        )
      })
    })
  })
})
