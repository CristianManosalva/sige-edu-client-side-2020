import React from 'react';
import {
   Row, Col
} from 'reactstrap';
// react plugin used to create charts
import { HorizontalBar, Line } from 'react-chartjs-2';
// function that returns a color based on an interval of numbers

import {} from 'components';

class CrmReportsCustomers extends React.Component{

    render(){
      const data = {
  labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
  datasets: [
    {
      label: 'Semana Actual',
      fill: true,
      lineTension: 0.6,
      backgroundColor: 'rgba(38, 166, 154,1)',
      borderColor: 'rgba(38, 166, 154,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#fafafa',
      pointBackgroundColor: 'rgba(38, 166, 154,1)',
      pointBorderWidth: 2,
      pointHoverRadius: 8,
      pointHoverBackgroundColor: 'rgba(38, 166, 154,1)',
      pointHoverBorderColor: '#eeeeee',
      pointHoverBorderWidth: 2,
      pointRadius: 6,
      pointHitRadius: 10,
      data: [10, 35, 22, 2, 0, 0, 0]
    },
    {
      label: 'Semana anterior',
      fill: true,
      lineTension: 0.4,
      backgroundColor: 'rgba(255, 138, 101,1)',
      borderColor: 'rgba(255, 138, 101,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#fafafa',
      pointBackgroundColor: 'rgba(255, 138, 101,1)',
      pointBorderWidth: 2,
      pointHoverRadius: 8,
      pointHoverBackgroundColor: 'rgba(255, 138, 101,1)',
      pointHoverBorderColor: '#eeeeee',
      pointHoverBorderWidth: 2,
      pointRadius: 6,
      pointHitRadius: 10,
      data: [0, 3, 0, 10, 0, 0, 1]
    }
  ]
};
const data2 = {
  labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
  datasets: [
    {
      label: 'Actividades',
      backgroundColor: 'rgba(38, 166, 154,1)',
      borderColor: 'rgba(38, 166, 154,0.8)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(38, 166, 154,0.8)',
      hoverBorderColor: 'rgba(38, 166, 154,1)',
      data: [10, 35, 22, 2, 0, 2, 1]
    }
  ]
};


// General configuration for the charts with Line gradientStroke
const gradientChartOptionsConfiguration1 = {
    maintainAspectRatio: false,
    legend: {
        display: true
    },
    tooltips: {
      bodySpacing: 4,
      mode:"nearest",
      intersect: 0,
      position:"nearest",
      xPadding:10,
      yPadding:10,
      caretPadding:10
    },
    responsive: 1,
    scales: {
        yAxes: [{
          display:1,
          ticks: {
              display: true
          },
          gridLines: {
              
              drawBorder: false
          }
        }],
        xAxes: [{
          display:1,
          ticks: {
              display: true
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: true,
            drawBorder: false
          }
        }]
    },
    layout:{
      padding:{left:0,right:0,top:25,bottom:25}
    }
};

// General configuration for the charts with Line gradientStroke
const gradientChartOptionsConfiguration2 = {
    maintainAspectRatio: false,
    legend: {
        display: true
    },
    tooltips: {
      bodySpacing: 4,
      mode:"nearest",
      intersect: 0,
      position:"nearest",
      xPadding:10,
      yPadding:10,
      caretPadding:10
    },
    responsive: 1,
    scales: {
        yAxes: [{
          display:1,
          ticks: {
              display: true
          },
          gridLines: {
              
              drawBorder: false
          }
        }],
        xAxes: [{
          display:1,
          ticks: {
              display: true
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: true,
            drawBorder: false
          }
        }]
    },
    layout:{
      padding:{left:0,right:0,top:25,bottom:25}
    }
};

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Información General</h1>
                        </div>
                    </div>


                            
                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Actividades creadas por Día</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">
                            
                                    <div className="chart-area" style={{height: 500+'px'}}>
                                        <HorizontalBar data={data2} options={gradientChartOptionsConfiguration2}/>
                                    </div>


                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>

                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Creación de actividades por Semana</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">
                            


                                    <div className="chart-area" style={{height: 500+'px'}}>
                                        <Line data={data} options={gradientChartOptionsConfiguration1}/>
                                    </div>
                      


                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>








                        </Col>
                        
                    </Row>
                </div>
            </div>
        );
    }
}

export default CrmReportsCustomers;
