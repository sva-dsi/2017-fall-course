function main() {
        var map = new L.Map('map', {
          zoomControl: false,
          center: [43, 0],
          zoom: 3
        });
        L.tileLayer('http://tile.stamen.com/toner/{z}/{x}/{y}.png', {
          attribution: 'Stamen'
        }).addTo(map);
        cartodb.createLayer(map, 'https://team.cartodb.com/u/aureliamoser/api/v2/viz/67f88c2a-b77d-11e4-aae0-0e853d047bba/viz.json')
            .addTo(map)
         .on('done', function(layer) {
          layer.setInteraction(true);
          layer.on('featureOver', function(e, latlng, pos, data) {
            cartodb.log.log(e, latlng, pos, data);
          });
          layer.on('error', function(err) {
            cartodb.log.log('error: ' + err);
          });
        }).on('error', function() {
          cartodb.log.log("some error occurred");
        });
      }
      // you could use $(window).load(main);
      window.onload = main;