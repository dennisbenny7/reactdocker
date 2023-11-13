import React,{useState,useEffect} from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

import ReactApexChart from 'react-apexcharts'
import { Card } from '@material-ui/core';
function ResponsiveContainers() {

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  var state1 = {
          
    series: [{
      name: 'Inflation',
      data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
    }],
    options: {
      chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ["#304758"]
        }
      },
      
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        position: 'top',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            }
          }
        },
        tooltip: {
          enabled: true,
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + "%";
          }
        }
      
      },
      title: {
        text: 'Monthly Inflation in Argentina, 2002',
        floating: true,
        offsetY: 330,
        align: 'center',
        style: {
          color: '#444'
        }
      }
    },
  
  
  };



 var state = {
          
    series: [44, 55, 41, 17, 15,44, 55, 41, 17, 15,44, 55, 41, 17, 15,44, 55, 41, 17, 15,],
    options: {
      plotOptions: {
        pie: {
          customScale: 1,
          donut: {
            size: 50
          }
        }
      },
      labels: ['loan against wherehose resipt', 'loan to district aand urban co bank', 'Orangeuiouo', 'Watermelonuio',"kaljuiouijjjjjjjjjjjj",'Appleuiklui', 'Mangofuffuyuru', 'Orangeuiouo', 'Watermelonuio',"kaljuiouijjjjjjjjjjjj",'loan against wherehose resipt', 'loan to district aand urban co bank', 'Orangeuiouo', 'Watermelonuio',"kaljuiouijjjjjjjjjjjj",'Appleuiklui', 'Mangofuffuyuru', 'Orangeuiouo', 'Watermelonuio',"kaljuiouijjjjjjjjjjjj"],
      chart: {
        type: 'donut',
        
      },
      responsive: [{
        breakpoint: 400,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },
  
  }

  
  return (
    <div style={{padding:"30px"}}>
  




  <ReactApexChart options={state1.options} series={state1.series} type="bar" />





      
   </div>
  );
}

export default ResponsiveContainers;
