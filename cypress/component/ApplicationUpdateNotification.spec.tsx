import React from 'react'
import { Button, ApplicationUpdateNotification } from '@toptal/picasso'
import { useNotifications } from '@toptal/picasso/utils'

const ApplicationUpdateNotificationExample = () => {
  const { showCustom } = useNotifications()

  return (
    <Button
      data-testid='trigger'
      variant='secondary'
      onClick={() =>
        showCustom(
          <ApplicationUpdateNotification
            data-testid='application-update-notification'
            testIds={{
              updateLaterButton: 'update-later-button',
            }}
          />,
          {
            persist: true,
          }
        )
      }
    >
      Show App Update Notification
    </Button>
  )
}

describe('ApplicationUpdateNotification', () => {
  it('renders notification when click on trigger', () => {
    cy.mount(<ApplicationUpdateNotificationExample />)

    cy.get('[data-testid="trigger"]').click()
    cy.get('body').happoScreenshot()
  })

  it('renders notification when click on trigger and close when click on notification button', () => {
    cy.mount(<ApplicationUpdateNotificationExample />)

    cy.get('[data-testid="trigger"]').click()
    cy.get('[data-testid="application-update-notification"]').should(
      'be.visible'
    )

    cy.get('[data-testid="update-later-button"]').click()

    cy.get('[data-testid="application-update-notification"]').should(
      'not.be.visible'
    )
  })
})
