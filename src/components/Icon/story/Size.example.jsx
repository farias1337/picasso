import React from 'react'
import { Container } from '@toptal/picasso'
import { Cog } from '@toptal/picasso/Icon'

const IconExample = () => (
  <div>
    <Container inline right='small'>
      <Cog size={2} />
    </Container>
    <Cog style={{ width: '3em', height: '3em' }} />
  </div>
)

export default IconExample
