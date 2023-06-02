google.charts.load('current', {
    'packages':['geochart'],
  });
  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
      ['Country', 'Plastic Waste'],
      ['Albania', 0.543214162],
      ['Algeria', 0.134113767],
      ['Angola', 0.027022781],
      ['Antigua and Barbuda', 0.020618557],
      ['Argentina', 0.09238293],
      ['Armenia', 18270],
      ['Australia', 0.00126969],
      ['Bahamas', 0.051413882],
      ['Bahrain', 0],
      ['Bangladesh', 0.151122996],
      ['Barbados', 0.156794425],
      ['Belgium', 0.002946529],
      ['Belize', 0.958974359],
      ['Bosnia and Herzegovina', 0.001817631],
      ['Brazil', 0.179099739],
      ['BRN', 0.309468822],
      ['Bulgaria', 0.001],
      ['Burkina Faso', 0],
      ['Cambodia', 0.067507733],
      ['Cameroon', 0.412389859],
      ['Canada', 0.006361765],
      ['Cape Verde', 0],
      ['Chile', 0.016990291],
      ['China', 0.049314957],
      ['Colombia', 0.00856195],
      ['Comoros', 0],
      ['CG', 0.125627207],
      ['Costa Rica', 0.089144216],
      ["CI", 0.186024808],
      ['Croatia', 0.054237288],
      ['Cyprus', 0.002502085],
      ['CD', 0.004839211],
      ['Denmark', 0.001559252],
      ['Djibouti', 0.004106776],
      ['Dominica', 0.736111111],
      ['Dominican Republic', 0.584411956],
      ['Ecuador', 0.065385058],
      ['Egypt', 0.024614496],
      ['El Salvador', 0.125193678],
      ['Equatorial Guinea', 0.298672566],
      ['Eritrea', 0.013726051],
      ['Estonia', 0.009049774],
      ['Fiji', 0.41011236],
      ['Finland', 0],
      ['France', 0.003608168],
      ['French Guiana', 0.024054983],
      ['Gabon', 0.20478601],
      ['Gambia', 0.179301533],
      ['Georgia', 0.000750563],
      ['Germany', 0.001604464],
      ['Ghana', 0.13758301],
      ['Greece', 0.020624463],
      ['Grenada', 1.160714286],
      ['Guadeloupe',0.01],
      ['Guatemala', 0.406234003],
      ['Guinea', 0.183775742],
      ['Guinea-Bissau', 0.128578865],
      ['Guyana', 1.591315453],
      ['Haiti', 0.615200213],
      ['Honduras', 0.249948697],
      ['Honk Kong', 0.015061861],
      ['Iceland', 0],
      ['India', 0.092587331],
      ['Indonesia', 0.208158135],
      ['Iran', 0.01119232],
      ['Iraq', 0.001704401],
      ['Ireland', 0.02355592],
      ['Israel', 0.003873694],
      ['Italy', 0.006837325],
      ['Jamaica', 0.791723202],
      ['Japan', 0.014464764],
      ['Jordan', 0.000099],
      ['Kazakhstan', 0.000700771],
      ['Kenya', 0.004926389],
      ['Kiribati', 0],
      ['Kuwait', 0.001663894],
      ['Latvia', 0.004719455],
      ['Lebanon', 0.099766628],
      ['Lesotho', 0],
      ['Liberia', 0.534332591],
      ['Libya', 0.129703409],
      ['Lithuania', 0.002536232],
      ['Madagascar', 0.028736698],
      ['Malaysia', 2.287887324],
      ['Maldives', 0],
      ['Malta', 0],
      ['Marshall Islands', 0],
      ['Martinique',0.058510638],
      ['Mauritania',0.028060097],
      ['Mauritius',0],
      ['Mexico', 0.027528689],
      ['Monaco', 0],
      ['Montenegro', 0],
      ['Morocco', 0.049352928],
      ['Mozambique', 0.08377791],
      ['Myanmar', 0.047071885],
      ['Namibia', 0.000801603],
      ['Netherlands', 0.015850734],
      ['New Zealand', 0.014217019],
      ['Nicaragua', 0.223800794],
      ['Nigeria', 0.092752931],
      ['North Korea', 0.001948103],
      ['Norway', 0],
      ['Oceania', 0.086189708],
      ['Oman', 0.000201005],
      ['Pakistan', 0.004031122],
      ['Palau',0.388888889],
      ['Palestine', 0.023690022],
      ['Panama', 1.233396138],
      ['Papua New Guinea', 0.348564266],
      ['Peru', 0.007966779],
      ['Philippines', 3.296160641],
      ['Poland', 0.000765414],
      ['Portugal', 0.007432036],
      ['Puerto Rico', 0.024207296],
      ['Qatar', 0],
      ['Reuinion',0],
      ['Romania', 0.004131164],
      ['Russia', 0.003715586],
      ['Rwanda', 24760],
      ['Saint Kitts and Nevis', 0.018867925],
      ['Saint Lucia', 2.453551913],
      ['Saint Vincent and the Grenadines', 0.72972973],
      ['Samoa', 0],
      ['Sao Tome and Principe', 0.358139535],
      ['Saudi Arabia', 0.0000875],
      ['Senegal', 0.010370643],
      ['Serbia', 0],
      ['Sierra Leone', 0.463842314],
      ['Singapore', 0.028256375],
      ['Slovakia', 0],
      ['Slovenia', 0.005291005],
      ['Solomon Islands', 0.149253731],
      ['Somalia', 0.000129509],
      ['South Africa', 0.072850849],
      ['South Korea', 0.007554905],
      ['Spain', 0.005028136],
      ['Sri Lanka', 0.452729319],
      ['Sudan', 0.002475883],
      ['Suriname', 2.886402754],
      ['Sweden', 0.003587086],
      ['Syria', 0.002577622],
      ['Taiwan', 0.022335324],
      ['Tanzania', 0.099732782],
      ['Thailand', 0.327550053],
      ['TL', 0.552977572],
      ['Togo', 0.053947043],
      ['Tonga', 0],
      ['Trinidad and Tobago', 2.549820789],
      ['Tunisia', 0.058828559],
      ['Turkey', 0.171748771],
      ['Ukraine', 0.01952539],
      ['United Arab Emirates', 0.001432811],
      ['United Kingdom', 0.010410188],
      ['United States', 0.007387598],
      ['Uruguay', 0.288272675],
      ['Uzbekistan', 0.209987376],
      ['Vietnam', 0.292560801],
      ['Yemen', 0.008641383],
      ['Zimbabwe', 0],
    ]);

    var options = {
        colorAxis: {values: [0, 0.01, 0.03, 0.1, 0.3, 1, 3, 10], colors: ['#b1e3bb', '#9edeaa' ,'#8cdb9b','#6bcf7e', '#2cd14d' ,'#19cf3d', '#04cf2c', 'green'],},
        backgroundColor: 'none',
        datalessRegionColor: 'lightgray'
    };

    var chart = new google.visualization.GeoChart(document.getElementById('map2'));

    chart.draw(data, options);
  }