import React from 'react'

import Select from '../Select'

const SelectDisabledExample = () => (
  <div>
    <Select disabled options={OPTIONS} placeholder='Disabled...' />
  </div>
)

const OPTIONS = [
  { value: 1, text: 'Option 1' },
  { value: 2, text: 'Option 2' },
  { value: 3, text: 'Option 3' },
  { value: 4, text: 'Option 4' }
]

export default SelectDisabledExample
