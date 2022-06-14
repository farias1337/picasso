import React from 'react'
import { PromptModal } from '@toptal/picasso'
import { noop } from '@toptal/picasso/utils'

describe('PromptModal', () => {
  it('renders on desktop and mobile', () => {
    cy.mount(
      <PromptModal
        open
        title='Confirm'
        message='Hello, World!'
        onSubmit={noop}
        submitText='OK'
      />
    )
    cy.get('body').happoScreenshot()

    cy.get('body').happoScreenshot({
      component: 'PromptModal',
      targets: [
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        { name: 'chrome-small', browser: 'chrome', viewport: '400x800' },
      ],
    })
  })
})
