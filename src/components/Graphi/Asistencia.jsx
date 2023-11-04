import ReactECharts from 'echarts-for-react';


export function AsistenciaG() {
  const options = {
    xAxis: {
      data: ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom']
    },
    yAxis: {},
    series: [
      {
        type: 'bar',
        data: [10, 25, 30, 28, 30, 2, 3]
      }
    ]
  };
  
  return <ReactECharts option={options} />; 
}
