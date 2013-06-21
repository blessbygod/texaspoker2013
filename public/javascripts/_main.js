define(function(require){
  require('highcharts');
  var Backbone = require('backbone');
 $.get('/filter',function(data){
    var _data = [];
    _.each(data,function(count, type){
      if(type === 'waste')return false;
      _data.push([type, Number((count/10).toFixed(2)) ]);
    });

    new Highcharts.Chart({
      chart: {
        type: 'pie',
        renderTo: document.getElementById('container')
      },
      title: {
        text: 'texas poker 2013 calc pie'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage}%</b>',
        percentageDecimals: 1
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            color: '#000000',
            connectorColor: '#000000',
            formatter: function() {
              return '<b>'+ this.point.name +'</b>: '+ this.percentage +' %';
            }
          }
        }
      },
      series: [{
        type: 'pie',
        name: 'poker types pie',
        data: _data
      }]
    });
  });
});
