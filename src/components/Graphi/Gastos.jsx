import ReactECharts from 'echarts-for-react';


export function GastosG() {
  const options = {
    xAxis: {
      data: ['A', 'B', 'C', 'D', 'E']
    },
    yAxis: {},
    series: [
      {
        data: [10, 22, 28, 23, 19],
        type: 'line',
        smooth: true
      }
    ]
  };
  
  return <ReactECharts option={options} />; 
}
