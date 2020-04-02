import AnalyticsChart from '../AnalyticsChart'
import { sharedChartDocs } from '../../../../picasso-charts/src/LineChart/story'

import PicassoBook from '~/.storybook/components/PicassoBook'

const page = PicassoBook.section('Charts').createPage(
  'AnalyticsChart',
  'Use LineChart with analytics data'
)

page.createTabChapter('Props').addComponentDocs({
  component: AnalyticsChart,
  name: 'AnalyticsChart',
  additionalDocs: Object.assign(sharedChartDocs, {
    data: {
      name: 'data',
      type: {
        name: '[]',
        description: '{ id: string, values: [key: string]: number }'
      },
      description: 'A record of data points to be rendered as a line chart',
      required: true
    },
    highlights: {
      name: 'highlights',
      type: {
        name: '[]',
        description: '{ data: string[], color: string }'
      },
      description: 'A list of dates and to be highlighted'
    },
    referenceLines: {
      name: 'referenceLines',
      type: {
        name: '[]',
        description: `{ data: { [key: string]: number }, color: string }`
      },
      description:
        'A record of data points to be rendered as a dashed horizontal line'
    }
  })
})

page
  .createChapter()
  .addExample('AnalyticsChart/story/Default.example.tsx', 'Default')
