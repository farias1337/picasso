import React from 'react'
import { Icon, IconsLibrary } from '@toptal/picasso'
import { Check } from '@toptal/picasso/Icons'

const IconExample = () => (
  <div>
    <Icon name='check' />
  </div>
)

// somewhere in the code
IconsLibrary.add(Check)

export default IconExample
