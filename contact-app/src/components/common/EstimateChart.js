import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2'
 
class EstimateChart extends Component{
    
  render(){
    const options = {
        legend: {
          display: false, // label 보이기 여부
        },
        scales: {
          yAxes: [{
            ticks: { 
              min: 0, // y축 스케일에 대한 최소값 설정
              stepSize: 1, // y축 그리드 한 칸당 수치
            }
          }]
        },
       
        // false : 사용자 정의 크기에 따라 그래프 크기가 결정됨.
        // true : 크기가 알아서 결정됨.
        maintainAspectRatio: false 
      }

    //   이거 api로 받아오거나 가공해야할 부분
      const data = {
        // 각 막대별 라벨
        labels: ['2020-01-01', '2020-01-02', '2020-01-03', '2020-01-04', '2020-01-05','2020-01-06','2020-01-07'],
        datasets: [
          {
            type:'line',
            label: 'Estimated Price',
            borderWidth: 4, // 테두리 두께
            data: [3,3.5, 4.5, 4, 4.5, 4.2, 4.3], // 수치
            backgroundColor:['rgb(115, 134, 255)'], // 각 막대 색
            borderColor: ['rgb(115, 134, 255)'],
            pointBackgroundColor:['rgb(115, 134, 255)'],
          },
          {
            type: 'line',
            label: 'Purchased Price',
            borderWidth: 3, // 테두리 두께
            data: [3.2, 3.2, 3.2, 3.2, 3.2, 3.2, 3.2],
            backgroundColor:['rgb(255, 0, 0)'], // 각 막대 색
            borderColor: ['rgb(255, 0, 0)'],
            pointBackgroundColor:['rgb(255, 0, 0)'],
            pointRadius: 0

        }
        ]
      };
    return <div style={{width:1200}}>
        <Bar
            data={data}
            options={options}
            height={450}>

    
        </Bar>


    </div>
  }
}
 
export default EstimateChart;