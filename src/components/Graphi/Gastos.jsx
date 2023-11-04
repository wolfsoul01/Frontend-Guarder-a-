import ReactECharts from 'echarts-for-react';


export function GastosG() {
  const options = {
    xAxis: {
      data:  ['A', 'B', 'C', 'D', 'E']
    },
    yAxis: {},
    series: [
      {
        type: 'bar',
        data: [10,30, 28,30,25]
      }
    ]
  };
  
  
  return <ReactECharts option={options} />; 
}
export function IngresosG() {
  const options = {
   
    xAxis: {
      data: ['A', 'B', 'C', 'D', 'E']
    },
    yAxis: {
    },
    series: [
      {
        data: [10, 22, 28, 23, 19],
        type: 'bar',
        smooth: true
      }
    ]
  };
  
  return <ReactECharts option={options} />; 
}
