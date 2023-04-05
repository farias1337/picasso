import React from 'react'
import { gradients } from '@toptal/picasso/utils'
import { Typography, Container } from '@toptal/picasso'

const Example = () => (
  <>
    <Container bottom='small'>
      <Typography>
        Use the gradient just directly from Picasso and apply it to any element
        as{' '}
        <Typography inline underline='solid'>
          background
        </Typography>{' '}
        style property.
      </Typography>
    </Container>
    <div
      style={{
        height: '5rem',
        background: gradients.blue,
      }}
    />
  </>
)

export default Example
