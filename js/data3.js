var dataFirst = {
    label: "Aquaculture",
    data: [
        2029179,
        1948048,
        2014404,
        2247676,
        2402677,
        2604353,
        2791746,
        2915674,
        3092313,
        3238166,
        3526017,
        3930472,
        4280803,
        4504942,
        4941524,
        5219603,
        5408491,
        6282015,
        6593363,
        6714748,
        7347225,
        7818586,
        8213439,
        9089265,
        10191481,
        11354349,
        12670909,
        13971504,
        15531105,
        16486351,
        16850460,
        18305028,
        21211488,
        24467926,
        27798480,
        31232256,
        33790684,
        34296276,
        36463876,
        39604752,
        41724568,
        44324824,
        47375084,
        50271408,
        54570316,
        57820200,
        61591980,
        64937296,
        68799080,
        73045256,
        78020016,
        82635400,
        90020576,
        97110168,
        101084800,
        106004184
      ],
    lineTension: 0,
    // fill: rgb(255, 121, 121),
    borderColor: 'rgb(255, 121, 121)',
    backgroundColor: 'rgb(255, 121, 121, 0.2)'
  };

var dataSecond = {
    label: "Capture Fisheries",
    data: [
        34790180,
        38630192,
        42035680,
        42996372,
        47586828,
        48653612,
        52568636,
        56020668,
        59336232,
        57903208,
        63886816,
        63917908,
        59670600,
        60227296,
        63470416,
        62941132,
        66328024,
        65083616,
        67115744,
        67583584,
        68257272,
        70308776,
        72121096,
        71946272,
        77654920,
        79380104,
        84935064,
        85595384,
        89066600,
        89603184,
        86024296,
        84921536,
        86415584,
        87749048,
        93361400,
        93696568,
        95159584,
        94464032,
        86874552,
        92812112,
        94763864,
        91957968,
        92313232,
        89559024,
        94176616,
        93697960,
        91237776,
        91558656,
        90694760,
        90266896,
        88855992,
        93180832,
        90512336,
        91753928,
        92360624,
        93736944
      ],
    lineTension: 0,

  };

var speedData = {
  labels: [
    1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969,
    1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979,
    1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989,
    1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999,
    2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
    2010, 2011, 2012, 2013, 2014, 2015
  ],
  datasets: [dataSecond, dataFirst],
};



var lineChart = new Chart(document.getElementById("aquachart"), {
  type: 'line',
  data: speedData,
  options: {
    legend: {
      display: true,
      position: 'top',
      labels: {
        boxWidth: 40
      }
    }
  }
});

Chart.defaults.global.defaultFontColor = "rgb(199, 199, 199)";
