Plotly.d3.csv('/data/top_players.csv', function(err, rows){
      function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
      }

    var data = [{
        type: 'choropleth',
        locationmode: 'country names',
        locations: unpack(rows, 'nationality'),
        z: unpack(rows, 'wage_eur'),
        text: unpack(rows, 'short_name'),
        autocolorscale: true
    }];

    var layout = {
      title: 'Players by Nationality',
      geo: {
          projection: {
              type: 'robinson'
          }
      }
    };

    Plotly.newPlot("map", data, layout, {showLink: false});
});