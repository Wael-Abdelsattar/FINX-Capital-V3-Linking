Highcharts.chart(
  'gauge-chart',
  {
    chart: {
      type: 'gauge',
      plotBackgroundColor: null,
      plotBackgroundImage: null,
      plotBorderWidth: 0,
      plotShadow: false,
      backgroundColor: '#1B1B1B',
      height: '246px'
    },

    exporting: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },

    title: {
      text: '',
    },

    pane: {
      startAngle: -150,
      endAngle: 150,
      background: [
        {
          backgroundColor: '#1B1B1B',
          borderWidth: 2,
          borderColor: '#ffffff'
        },
        {
          backgroundColor: '#1B1B1B',
          borderWidth: 2,
          borderColor: '#ffffff'
        },
        {
          backgroundColor: '#1B1B1B',
          borderWidth: 2,
          borderColor: '#ffffff'
        }
      ]
    },



    // the value axis
    yAxis: {
      min: 300,
      max: 900,
      minorTickInterval: 'auto',
      minorTickWidth: 2,
      minorTickLength: 8,
      minorTickPosition: 'inside',
      minorTickColor: '#666',

      tickPixelInterval: 80,
      tickWidth: 2,
      tickPosition: 'inside',
      tickLength: 15,
      tickColor: 'red',
      labels: {
        step: 1,
        rotation: 'auto',
        distance: 15,
        style: {
          color: 'white',
          fontSize: '14px'
        }
      },
      lineWidth: 0,
      title: {
        text: '',
      },
      plotBands: [
        {
          from: 0,
          to: 60,
          color: 'none',
          className: 'red-area',
          borederWidth: 2 // green
        },
        {
          from: 60,
          to: 120,
          color: 'none',
          className: 'orange-area',
          borederWidth: 2 // green
        },
        {
          from: 120,
          to: 160,
          color: 'none',
          className: 'yellow-area',
          borederWidth: 2 // yellow
        },
        {
          from: 160,
          to: 200,
          color: 'none',
          className: 'green-area',
          borederWidth: 2 // red
        },
      ],
    },

    series: [
      {
        name: 'Speed',
        data: [745],
        tooltip: {
          valueSuffix: ' km',
        },
        dataLabels: {
          borderWidth: 0,
          useHTML: true
        },
        pivot: {
          radius: 15,
          backgroundColor: '#505050'
        }
      },
    ],
  }
);
