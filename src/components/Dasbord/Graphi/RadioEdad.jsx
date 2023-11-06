/* eslint-disable react/prop-types */
import Chart from 'react-apexcharts'

export function RadiosEdad({kids=[]}) {

  // Tomo array de kid y me quedo solo con las edades despues el new Set se queda solo con los valores unicos con ... en un array y despues los ordenos 
  const agesTotal =[ ...new Set (kids.map(kid=> kid.edad))].sort()

  const graphi = {
          
            series: agesTotal,
            options: {
              chart: {
                width:200,
                type: 'pie',
              },
              labels: ['1 año', '2 año', '3 año', '4 año', '5 año'],
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            }
          }

  return <Chart options={graphi.options} series={graphi.series} type='pie'  />
}
