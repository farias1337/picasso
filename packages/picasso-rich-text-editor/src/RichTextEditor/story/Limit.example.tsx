import React, { useState } from 'react'
import { Container } from '@toptal/picasso'
import { RichTextEditor } from '@toptal/picasso-rich-text-editor'

import type { RichTextEditorChangeHandler } from '../types'

const Example = () => {
  const [value, setValue] = useState<string | undefined>()

  const handleChange: RichTextEditorChangeHandler = newValue =>
    setValue(newValue)

  return (
    <>
      <RichTextEditor
        id='limit'
        onChange={handleChange}
        placeholder='Write some cool rich text'
        minLength={5}
        maxLength={25}
      />
      <Container
        padded='small'
        top='large'
        style={{
          fontFamily: "Consolas, 'Courier New', monospace",
          background: 'lightyellow',
        }}
      >
        {value}
      </Container>
    </>
  )
}

export default Example
