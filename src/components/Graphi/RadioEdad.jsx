import ReactECharts from 'echarts-for-react';


export function RadiosEdad() {
    const options = {
        title: {
          text: '% De edades ',
          left: 'center',
          top: 'center'
        },
        series: [
          {
            type: 'pie',
            data: [
              {
                value: 335,
                name: '1'
              },
              {
                value: 234,
                name: '2'
              },
              {
                value: 1548,
                name: '3'
              },
              {
                value: 800,
                name: '4'
              },
              {
                value: 100,
                name: '5'
              }
            ],
            radius: ['40%', '70%']
          }
        ]
      };
  
  return <ReactECharts option={options} />; 
}
