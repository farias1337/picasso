import React from 'react'
import { palette } from '@toptal/picasso/utils'
import { AnalyticsChart } from '@topkit/analytics-charts'

const CHART_DATA = [
  {
    id: 'role',
    values: {
      '2020-10-20': 0.0,
      '2020-10-21': 0.0,
      '2020-10-22': 0.0,
      '2020-10-23': 0.0,
      '2020-10-24': 0.0,
      '2020-10-25': 0.0,
      '2020-10-26': 0.0,
      '2020-10-27': 0.0,
      '2020-10-28': 0.0,
      '2020-10-29': 0.0,
      '2020-10-30': 1.0,
      '2020-10-31': 1.0,
      '2020-11-01': 0.0,
      '2020-11-02': 0.0,
      '2020-11-03': 0.0,
      '2020-11-04': 0.0,
      '2020-11-05': 0.0,
      '2020-11-06': 0.0,
      '2020-11-07': 2.0,
      '2020-11-08': 0.0,
      '2020-11-09': 0.0,
      '2020-11-10': 0.0
    }
  },
  {
    id: 'team',
    values: {
      '2020-10-20': 1.7,
      '2020-10-21': 2,
      '2020-10-22': 1.7,
      '2020-10-23': 2,
      '2020-10-24': 1.5,
      '2020-10-25': 1.3,
      '2020-10-26': 1.6,
      '2020-10-27': 2.7,
      '2020-10-28': 3.7,
      '2020-10-29': 1.7,
      '2020-10-30': 1.5,
      '2020-10-31': 1.6,
      '2020-11-01': 2,
      '2020-11-02': 1.5,
      '2020-11-03': 1.3,
      '2020-11-04': 1.5,
      '2020-11-05': 1.5,
      '2020-11-06': 1.8,
      '2020-11-07': 1.6,
      '2020-11-08': 2,
      '2020-11-09': 2,
      '2020-11-10': 3.1
    }
  }
]

const REFERENCE_LINE_DATA = {
  red: {
    '2020-10-20': 2,
    '2020-10-21': 2,
    '2020-10-22': 2,
    '2020-10-23': 2,
    '2020-10-24': 2,
    '2020-10-25': 2,
    '2020-10-26': 2,
    '2020-10-27': 2,
    '2020-10-28': 2,
    '2020-10-29': 2,
    '2020-10-30': 2,
    '2020-10-31': 2,
    '2020-11-01': 3,
    '2020-11-02': 3,
    '2020-11-03': 3,
    '2020-11-04': 3,
    '2020-11-05': 3,
    '2020-11-06': 3,
    '2020-11-07': 3,
    '2020-11-08': 3,
    '2020-11-09': 3,
    '2020-11-10': 3
  },
  green: {
    '2020-10-20': 1,
    '2020-10-21': 1,
    '2020-10-22': 1,
    '2020-10-23': 1,
    '2020-10-24': 1,
    '2020-10-25': 1,
    '2020-10-26': 1,
    '2020-10-27': 1,
    '2020-10-28': 1,
    '2020-10-29': 1,
    '2020-10-30': 1,
    '2020-10-31': 1,
    '2020-11-01': 1,
    '2020-11-02': 1,
    '2020-11-03': 1,
    '2020-11-04': 1,
    '2020-11-05': 1,
    '2020-11-06': 1,
    '2020-11-07': 1,
    '2020-11-08': 1,
    '2020-11-09': 1,
    '2020-11-10': 1
  }
}

const Example = () => (
  <AnalyticsChart
    xAxisKey='date'
    data={CHART_DATA}
    highlights={[
      {
        data: ['2020-10-21'],
        color: palette.green.main
      },
      {
        data: ['2020-11-01', '2020-11-02'],
        color: palette.red.main
      }
    ]}
    referenceLines={[
      {
        data: REFERENCE_LINE_DATA.red,
        color: palette.red.main
      },
      {
        data: REFERENCE_LINE_DATA.green,
        color: palette.green.main
      }
    ]}
    lineConfig={{
      role: { color: palette.blue.main },
      team: { color: palette.yellow.main }
    }}
  />
)

export default Example
