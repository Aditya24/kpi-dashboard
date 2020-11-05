demo = {
  initDocChart: function() {
    chartColor = "#FFFFFF";
    // General configuration for the charts with Line gradientStroke
    gradientChartOptionsConfiguration = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        bodySpacing: 4,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
      },
      responsive: true,
      scales: {
        yAxes: [{
          display: 0,
          gridLines: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }],
        xAxes: [{
          display: 0,
          gridLines: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }]
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 15,
          bottom: 15
        }
      }
    };
  },
  initDashboardPageCharts: function() {
    gradientBarChartConfiguration = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
    
      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
    
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 120,
            padding: 20,
            fontColor: "#9e9e9e",
            fontSize: 20,
          }
        }],
    
        xAxes: [{
    
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
             fontColor: "#9e9e9e",
            fontSize: 20
          }
        }]
      }
    };
 
    gradientChartOptionsConfigurationWithTooltipGreen = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
     
      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },      
    
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 50,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#a9a9a9",
            fontSize: 20,
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(0,242,195,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#a9a9a9",            
            fontSize: 20,
          }
        }]
      }
    };
    
var ctx = document.getElementById("salesByCountryBar").getContext("2d");

var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

gradientStroke.addColorStop(1, 'rgba(29,140,248,0.2)');
gradientStroke.addColorStop(0.4, 'rgba(29,140,248,0.0)');
gradientStroke.addColorStop(0, 'rgba(29,140,248,0)'); 


var myChart = new Chart(ctx, {
  type: 'bar',
  responsive: true,
  legend: {
    display: false
  },
  data: {
    labels: ['DENMARK', 'UK', 'GERMANY', 'NORWAY', 'FRANCE'],
    datasets: [{
      label: "Cars sold",
      fill: true,
     
      hoverBackgroundColor: gradientStroke,

      backgroundColor: [
        'rgba(255, 99, 132)',
        'rgba(54, 162, 235)',
        'rgba(255, 206, 86)',
        'rgba(75, 192, 192)',
        'rgba(153, 102, 255)'
    ],
    borderColor: [
        'rgba(255, 99, 132)',
        'rgba(54, 162, 235)',
        'rgba(255, 206, 86)',
        'rgba(75, 192, 192)',
        'rgba(153, 102, 255)',
    ],
      borderWidth: 2,
      borderDash: [],
      borderDashOffset: 0.0,
      data: [150,92,105,155,115],
    }]
  },
  options: gradientBarChartConfiguration
});

// Pie chart Sales Chanel

var ctx = document.getElementById("pieChart").getContext("2d");
Chart.defaults.global.defaultFontSize = 30;

var myPieChart = new Chart(ctx, {
  type: 'pie',
  responsive: true,
  data: {
    labels: ['ONLINE', 'OFFLINE', 'BIDDING ROUND', 'ONLINE AUCKTION'],
    datasets: [{
      label: "Sales Type",
      fill: true,
      backgroundColor: [
        '#43d5d6',
        '#ffaf2b',
        '#f97c4c',
        '#ed143d'
    ],
    borderColor: [
      '#43d5d6',
      '#ffaf2b',
      '#f97c4c',
      '#ed143d'
    ],
      borderWidth: 2,     
      data: [45,25,15,15],    
    }]
  },  
});









// Line Chart 

var myChart = new Chart(ctx, {
  type: 'line',
  data: data
});


var ctx = document.getElementById("chartLineGreen").getContext("2d");

var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

gradientStroke.addColorStop(1, 'rgba(66,134,121,0.15)');
gradientStroke.addColorStop(0.4, 'rgba(84, 129, 121, 0.335)'); //green colors
gradientStroke.addColorStop(0, 'rgba(66,134,121,0)'); //green colors

var data = {
  labels: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
  datasets: [{
    label: "Data",
    fill: true,
    backgroundColor: gradientStroke,
    borderColor:'#00d6b4',
    borderWidth: 5,
    borderDash: [],
    borderDashOffset: 0.0,
    pointBackgroundColor:'#00d6b4',
    pointBorderColor:'rgba(255,255,255,0)',
    pointHoverBackgroundColor: '#00d6b4',
    pointBorderWidth: 20,
    pointHoverRadius: 12,
    pointHoverBorderWidth: 15,
    pointRadius: 8,    
    data: [80, 100, 70, 80, 120, 80],
  }]
};

var myChart = new Chart(ctx, {
  type: 'line',
  data: data,
  options: gradientChartOptionsConfigurationWithTooltipGreen
});

/******BIG Chart************** */
 var chart_labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    var chart_data =  [60, 80, 65, 130, 80, 105, 90, 130, 70, 115, 60, 130];
    


    var ctx = document.getElementById("chartBig1").getContext('2d');

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(66,134,121,0.15)');
    gradientStroke.addColorStop(0.4, 'rgba(84, 129, 121, 0.335)'); //green colors
    gradientStroke.addColorStop(0, 'rgba(66,134,121,0)'); //green colors
    var config = {
      type: 'line',
      data: {
        labels: chart_labels,
        datasets: [{
          label: "Total sales",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: '#00d6b4',
          borderWidth: 5,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor:'#00d6b4',
          pointBorderColor:'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#00d6b4',
          pointBorderWidth: 20,
          pointHoverRadius: 12,
          pointHoverBorderWidth: 15,
          pointRadius: 8,
          data: chart_data,
        }]
      },
      options: gradientChartOptionsConfigurationWithTooltipGreen
    };
    var myChartData = new Chart(ctx, config);
    $("#0").click(function() {
      var data = myChartData.config.data;
      data.datasets[0].data = chart_data;
      data.labels = chart_labels;
      myChartData.update();
    });
    $("#1").click(function() {
      var chart_data = [80, 120, 105, 110, 95, 105, 90, 100, 80, 95, 70, 120];
      var data = myChartData.config.data;
      data.datasets[0].data = chart_data;
      data.labels = chart_labels;
      myChartData.update();
    });

    $("#2").click(function() {
      var chart_data = [100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100];
      var data = myChartData.config.data;
      data.datasets[0].data = chart_data;
      data.labels = chart_labels;
      myChartData.update();
    });

  },
};

// Generl configuration for Line Charts 


// Bar Chart Sales Performance
