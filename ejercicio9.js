    var http		= require('http');
    var bl			= require('bl');
    var resultados	= [];
    var count		= 0;

    function obtengoResultados () {
      for (var i = 0; i < 3; i++)
        console.log(resultados[i])
    }

    for (var i = 0; i < 3; i++)
          url(i);

    function url (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err)return console.error(err);
         resultados[index] = data.toString();
          count++;
          if (count == 3)
            obtengoResultados()
        }));
      });
    }


