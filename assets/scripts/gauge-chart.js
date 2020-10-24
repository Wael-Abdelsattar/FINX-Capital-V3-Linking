Highcharts.chart(
    'gauge-chart', {
        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false,
            backgroundColor: '#1B1B1B',
            height: '226px',
            marginLeft: 28,
            marginRight: 28,
            marginTop: 20
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
            background: [{
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
            minorTickWidth: 1,
            minorTickLength: 5,
            minorTickPosition: 'inside',
            minorTickColor: '#fff',

            tickPixelInterval: 60,
            tickWidth: 1,
            tickPosition: 'inside',
            tickLength: 15,
            tickColor: 'white',
            labels: {
                step: 1,
                rotation: 'none',
                distance: 25,
                style: {
                    color: "#FFFFFF",
                    fontSize: '14px'
                }
            },
            lineWidth: 0,
            title: {
                text: '',
            },
            plotBands: [
                // {
                //     from: 0,
                //     to: 60,
                //     color: 'none',
                //     className: 'red-area',
                //     borederWidth: 2, // green
                //     stroke: "#FFFF00"
                // },
                {
                    from: 300,
                    to: 692,
                    color: '#E02020',
                    className: 'poor',
                    borederWidth: 2, // green
                    // stroke: "#FFFF00",
                    // borderColor: "#FFFF00",
                    // labels: {
                    //     step: 1,
                    //     rotation: 'auto',
                    //     distance: 25,
                    //     style: {
                    //         color: "#FFFFFF",
                    //         fontSize: '14px'
                    //     }
                    // }
                    style: {
                        color: "#FFFFFF",
                        // fontSize: '14px'
                    }
                },
                {
                    from: 693,
                    to: 742,
                    color: '#FA6400',
                    className: 'fair',
                    borederWidth: 2 // yellow
                },
                {
                    from: 743,
                    to: 789,
                    color: '#F7B500',
                    className: 'good',
                    borederWidth: 2 // red
                },
                {
                    from: 790,
                    to: 832,
                    color: '#9AFF2F',
                    className: 'v-good',
                    borederWidth: 2 // red
                },
                {
                    from: 833,
                    to: 900,
                    color: '#478A00',
                    className: 'excellent',
                    borederWidth: 2 // red
                },
            ],
        },

        series: [{
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
        }, ],
    }
);