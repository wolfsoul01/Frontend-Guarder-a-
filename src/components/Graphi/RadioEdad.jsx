import ReactECharts from 'echarts-for-react'

const info = [
  { value: 8, name: '1 Años' },
  { value: 5, name: '2 Años' },
  { value: 10, name: '3 Años' },
  { value: 5, name: '4 Años' },
  { value: 2, name: '5 Años' }
]

export function RadiosEdad () {
  const options = {
    legend: {
      orient: 'vertical',
      x: 'left',
      data: info.map(e=>`${e.name}`),
    },
    title: {
      text: '',
      left: 'center',
      top: 'center'
    },
    series: [
      {
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        labelLine: {
          show: false
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '30',
            fontWeight: 'bold'
          }
        },
        data:info
      }
    ]
  }

  return <ReactECharts option={options} />
}
