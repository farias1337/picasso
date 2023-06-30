import React from 'react'
import { render, waitFor } from '@toptal/picasso/test-utils'
import type { OmitInternalProps } from '@toptal/picasso-shared'
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'

import LexicalEditor from './LexicalEditor'
import type { Props } from './LexicalEditor'
import LexicalTextLengthPlugin from '../LexicalTextLengthPlugin'
import LexicalHeadingsReplacementPlugin from '../LexicalHeadingsReplacementPlugin'
import ToolbarPlugin from '../LexicalEditorToolbarPlugin'
import LexicalListPlugin from '../LexicalListPlugin'
import type { CustomEmojiGroup } from './types'
import { LexicalLinkPlugin } from '../LexicalLinkPlugin'

jest.mock('../LexicalEditorToolbarPlugin', () => ({
  __esModule: true,
  default: jest.fn(() => <div>LexicalEditorToolbarPlugin</div>),
}))
jest.mock('../LexicalListPlugin', () => ({
  __esModule: true,
  default: jest.fn(() => <div>LexicalListPlugin</div>),
}))
jest.mock('../LexicalEmojiPlugin', () => ({
  __esModule: true,
  default: jest.fn(() => <div>LexicalEmojiPlugin</div>),
}))

jest.mock('@lexical/react/LexicalComposerContext', () => ({
  __esModule: true,
  useLexicalComposerContext: jest.fn(() => [{}]),
}))
jest.mock('@lexical/react/LexicalHistoryPlugin', () => ({
  __esModule: true,
  HistoryPlugin: jest.fn(() => [{}]),
}))

jest.mock('@lexical/react/LexicalRichTextPlugin', () => ({
  __esModule: true,
  RichTextPlugin: () => <div>RichTextPlugin</div>,
}))

jest.mock('@lexical/react/LexicalComposer', () => ({
  __esModule: true,
  LexicalComposer: ({ children }: any) => <div>{children}</div>,
}))

jest.mock('@lexical/react/LexicalOnChangePlugin', () => ({
  __esModule: true,
  OnChangePlugin: jest.fn(() => <div>OnChangePlugin</div>),
}))

jest.mock('../LexicalTextLengthPlugin', () => ({
  __esModule: true,
  default: jest.fn(() => <div>LexicalTextLengthPlugin</div>),
}))

jest.mock('../LexicalHeadingsReplacementPlugin', () => ({
  __esModule: true,
  default: jest.fn(() => <div>LexicalHeadingsReplacementPlugin</div>),
}))

jest.mock('../LexicalLinkPlugin', () => ({
  __esModule: true,
  LexicalLinkPlugin: jest.fn(() => <div>LexicalLinkPlugin</div>),
}))

const mockedLexicalTextLengthPlugin =
  LexicalTextLengthPlugin as jest.MockedFunction<typeof LexicalTextLengthPlugin>

const mockedHistoryPlugin = HistoryPlugin as jest.MockedFunction<
  typeof HistoryPlugin
>

const mockedLexicalHeadingsReplacementPlugin =
  LexicalHeadingsReplacementPlugin as jest.MockedFunction<
    typeof LexicalHeadingsReplacementPlugin
  >

const mockedLexicalLinkPlugin = LexicalLinkPlugin as jest.MockedFunction<
  typeof LexicalLinkPlugin
>

const mockedToolbarPlugin = ToolbarPlugin as jest.MockedFunction<
  typeof ToolbarPlugin
>
const mockedLexicalListPlugin = LexicalListPlugin as jest.MockedFunction<
  typeof LexicalListPlugin
>
const mockedOnChangePlugin = OnChangePlugin as jest.MockedFunction<
  typeof OnChangePlugin
>

const onTextLengthChange = jest.fn()

const renderLexicalEditor = (props: Partial<OmitInternalProps<Props>> = {}) => {
  return render(
    <LexicalEditor id='id' onTextLengthChange={onTextLengthChange} {...props} />
  )
}

describe('LexicalEditor', () => {
  beforeEach(() => {
    mockedLexicalTextLengthPlugin.mockImplementation(() => null)
    mockedLexicalHeadingsReplacementPlugin.mockImplementation(() => null)
    mockedToolbarPlugin.mockImplementation(() => (
      <div>LexicalEditorToolbarPlugin</div>
    ))
    mockedOnChangePlugin.mockImplementation(() => null)
    mockedLexicalListPlugin.mockImplementation(() => <div />)
    mockedLexicalLinkPlugin.mockImplementation(() => <div />)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('when LexicalEditor is rendered', () => {
    it('displays Editor core parts', async () => {
      const { getByText } = renderLexicalEditor()

      expect(getByText('RichTextPlugin')).toBeInTheDocument()
    })

    it('renders LexicalTextLengthPlugin with correct props', async () => {
      renderLexicalEditor()

      await waitFor(() =>
        expect(mockedLexicalTextLengthPlugin).toHaveBeenCalledWith(
          {
            onTextLengthChange,
          },
          {}
        )
      )
    })

    it('renders LexicalHeadingsReplacementPlugin', async () => {
      renderLexicalEditor()

      await waitFor(() =>
        expect(mockedLexicalHeadingsReplacementPlugin).toHaveBeenCalled()
      )
    })

    it('renders HistoryPlugin', async () => {
      renderLexicalEditor()

      await waitFor(() => expect(mockedHistoryPlugin).toHaveBeenCalled())
    })

    it('renders OnChangePlugin with correct props', () => {
      renderLexicalEditor()

      expect(mockedOnChangePlugin).toHaveBeenCalledWith(
        {
          ignoreSelectionChange: true,
          onChange: expect.any(Function),
        },
        {}
      )
    })

    it('renders ToolbarPlugin with correct props', () => {
      renderLexicalEditor()

      expect(mockedToolbarPlugin).toHaveBeenCalledWith(
        {
          disabled: true,
          customEmojis: undefined,
          plugins: [],
          toolbarRef: {
            current: null,
          },
        },
        {}
      )
    })
  })

  describe('when disabled prop is passed', () => {
    it('renders ToolbarPlugin with disabled prop', () => {
      renderLexicalEditor({ disabled: true })

      expect(mockedToolbarPlugin).toHaveBeenCalledWith(
        {
          disabled: true,
          customEmojis: undefined,
          plugins: [],
          toolbarRef: {
            current: null,
          },
        },
        {}
      )
    })
  })

  describe('when customEmojis and plugins prop is passed', () => {
    it('renders ToolbarPlugin with correct props', () => {
      renderLexicalEditor({
        disabled: true,
        customEmojis: ['foo' as unknown as CustomEmojiGroup],
        plugins: ['link'],
      })

      expect(mockedToolbarPlugin).toHaveBeenCalledWith(
        {
          disabled: true,
          customEmojis: ['foo'],
          plugins: ['link'],
          toolbarRef: {
            current: null,
          },
        },
        {}
      )
    })
  })
})
