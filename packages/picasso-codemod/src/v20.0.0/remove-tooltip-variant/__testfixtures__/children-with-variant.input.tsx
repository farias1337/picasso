// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { Tooltip } from '@toptal/picasso'

const Example = () => (
  <div>
    <Tooltip content='Content goes here...' open variant='dark'>
      <Button variant='flat'>Test me</Button>
    </Tooltip>
  </div>
)

export default Example
