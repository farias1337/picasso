import React, { useState } from 'react'
import {
  Accordion,
  AccordionProps,
  Typography,
  Button,
  Container,
  Check16,
} from '@toptal/picasso'

const TestAccordion = (props: Partial<AccordionProps>) => (
  <Accordion
    data-testid='accordion'
    content='Aliqua ut aliquip dolor velit.'
    {...props}
  >
    <Accordion.Summary>
      Est amet duis deserunt proident Lorem.
    </Accordion.Summary>
  </Accordion>
)

const Summary = ({
  onClick,
  expanded,
}: {
  onClick: () => void
  expanded: boolean
}) => (
  <Container
    flex
    alignItems='center'
    justifyContent='space-between'
    bottom='small'
    top='small'
  >
    <Typography variant='heading' size='medium'>
      Upcoming interviews
    </Typography>
    <Container>
      <Button variant='secondary' onClick={onClick} data-testid='trigger'>
        {expanded ? 'Hide' : 'Show'}
      </Button>
    </Container>
  </Container>
)

const Content = () => (
  <Container
    bordered
    flex
    justifyContent='space-around'
    padded='medium'
    data-testid='content'
  >
    <Button
      data-testid='start-onboarding'
      size='small'
      onClick={() => window.alert('Onboarding started')}
    >
      Start Interview Onboarding
    </Button>
  </Container>
)

const AccordionCustomSummary = () => {
  const [expanded, setExpanded] = useState(true)

  const handleClick = () => {
    setExpanded(prevExpanded => !prevExpanded)
  }

  return (
    <>
      <Summary onClick={handleClick} expanded={expanded} />
      <Accordion
        data-testid='accordion-custom-summary'
        content={<Content />}
        expanded={expanded}
        borders='none'
      />
    </>
  )
}

describe('Accordion', () => {
  it('renders', () => {
    cy.mount(<TestAccordion />)
    cy.get('body').happoScreenshot()
  })
  it('renders disabled', () => {
    cy.mount(<TestAccordion disabled />)
    cy.get('body').happoScreenshot()
  })
  it('renders border variants', () => {
    cy.mount(
      <>
        <TestAccordion borders='none' />
        <TestAccordion borders='middle' />
        <TestAccordion borders='all' />
      </>
    )
    cy.get('body').happoScreenshot()
  })
  it('renders expanded initially', () => {
    cy.mount(
      <>
        <TestAccordion defaultExpanded />
        <TestAccordion expanded />
      </>
    )
    cy.get('body').happoScreenshot()
  })
  it('renders collapsed initially', () => {
    cy.mount(<TestAccordion expanded={false} />)
    cy.get('body').happoScreenshot()
  })

  it('renders custom expand icon', () => {
    cy.mount(<TestAccordion expandIcon={<Check16 />} />)
    cy.get('body').happoScreenshot()
  })
})
describe('Accordion with custom summary', () => {
  it('closes and opens', () => {
    cy.mount(<AccordionCustomSummary />)
    cy.getByTestId('trigger').click()
    cy.getByTestId('content').should('not.be.visible')

    cy.getByTestId('accordion-custom-summary').happoScreenshot()

    cy.getByTestId('trigger').click()
    cy.getByTestId('content').should('be.visible')

    cy.getByTestId('accordion-custom-summary').happoScreenshot()
  })

  it('interacts with accordion content', () => {
    cy.mount(<AccordionCustomSummary />)

    cy.getByTestId('start-onboarding').click()
    cy.getByTestId('content').should('be.visible')
    cy.on('window:alert', text => {
      expect(text).equal('Onboarding started')
    })
  })
})
