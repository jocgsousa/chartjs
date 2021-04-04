import React, {Component} from 'react';
import 'chartjs-plugin-streaming';
// eslint-disable-next-line no-unused-vars
import { Bar, Line, Pie, Scatter, Doughnut,Bubble, Polar, HorizontalBar } from 'react-chartjs-2';

export default class App extends Component {
  state = {
    chartData: {
      labels: ['1', '2', '3', '4', '5', '6'],

      datasets: [
          // Primeira line
          {
              label: ['Linha de dados '],
              data: ['50', '70', '57', '59', '80', '60'],
              fontColor: 'white',
              backgroundColor: [
                  'rgba(123,23,12,0.1)',
                  'rgba(153,204,255,0.6)',
                  'rgba(193, 92, 212, 0.5)',
                  'rgba(255, 138, 76, 0.5)',
                  'rgba(76, 87, 255, 0.5)',
                  'rgba(76, 255, 79, 0.6)',
              ],
              borderWidth: '2',
              borderColor: '#33ccff',
              hoverBorderWidth: 3,
              // eslint-disable-next-line no-dupe-keys
              // backgroundColor: 'rgba(153,204,255,0.0)',
          },
      ],
  },
  };

  static defaultProps={
    title: true,
    position: 'bottom'
  }

  
  render(){
    const data = {
      datasets: [
          {
              label: 'HTTP: POST',
              borderColor: '#3399ff',
              backgroundColor: 'rgba(51, 153, 255, 0.2)',
              // lineTension: 0,
              // borderDash: [8, 4],
              data: [],
          },
          {
              label: 'HTTP: GET',
              borderColor: '#66ff66',
              backgroundColor: 'rgba(102, 255, 102, 0.2)',
              // lineTension: 0,
              // borderDash: [8, 4],
              data: [],
          },
      ],
  };

  const options = {
      maintainAspectRatio: true,
      scales: {
          
          xAxes: [
              {

                  type: 'realtime',
                  realtime: {
                      
                      onRefresh() {
                          data.datasets[0].data.push({
                              x: Date.now(),
                              y: Math.random() * 100,
                          });

                          data.datasets[1].data.push({
                              x: Date.now(),
                              y: Math.random() * 100,
                          });
                      },
                      
                      delay: 2000,
                  },

                
                  
              },
          ],
        
      },
      
      legend: {
          display: true,
          labels: {
              fontColor: 'white',
          },          
          
        },
      
  };

    return (
      <div className="chart" style={{width: '800px'}}>
        CHART COMPONENT
        <Line
        
          color='#FFF'
          data={data}
          options={options }
        />



        <Bar
          color='#FFF'
          data={this.state.chartData}
          options={{
             maintainAspectRatio: true,
             title:{
               display: true,
               text:'Gráfico de teste',
               fontSize: 25
             },
             legend:{
               display: this.props.title,
               position: this.props.position
             },
             
    
             }}
        />

        <Pie
          color='#FFF'
          data={this.state.chartData}
          options={{
             maintainAspectRatio: true,
             title:{
               display: true,
               text:'Gráfico de teste',
               fontSize: 25
             },
             legend:{
               display: this.props.title,
               position: this.props.position
             },
             
    
             }}
        />


        <Doughnut
          color='#FFF'
          data={this.state.chartData}
          options={{
             maintainAspectRatio: true,
             title:{
               display: true,
               text:'Gráfico de teste',
               fontSize: 25
             },
             legend:{
               display: this.props.title,
               position: this.props.position
             },
             
    
             }}
        />

        <HorizontalBar
          color='#FFF'
          data={this.state.chartData}
          options={{
             maintainAspectRatio: true,
             title:{
               display: true,
               text:'Gráfico de teste',
               fontSize: 25
             },
             legend:{
               display: this.props.title,
               position: this.props.position
             },
             
    
             }}
        />

        <Bubble
          color='#FFF'
          data={this.state.chartData}
          options={{
             maintainAspectRatio: true,
             title:{
               display: true,
               text:'Gráfico de teste',
               fontSize: 25
             },
             legend:{
               display: this.props.title,
               position: this.props.position
             },
             
    
             }}
        />








      </div>
    )
  }
}