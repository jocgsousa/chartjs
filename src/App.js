import React, {Component} from 'react';

// eslint-disable-next-line no-unused-vars
import { Bar, Line, Pie, Scatter, Doughnut,Bubble, Polar, HorizontalBar } from 'react-chartjs-2';

export default class App extends Component {
  state = {
    chartDate:{
      labels:['1','2','3','4'],
      datasets:[
        
        {
          label:'Índice',
          data:['400','876','456','345'],
          backgroundColor:['orange','red','yellow','green','blue'],
    
        }

      ]
    }
  };

  static defaultProps={
    title: true,
    position: 'bottom'
  }

  render(){
    return (
      <div className="chart" style={{width: '500px'}}>
        CHART COMPONENT
        <Doughnut
  
          data={this.state.chartDate}
          options={{
             maintainAspectRatio: false,
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