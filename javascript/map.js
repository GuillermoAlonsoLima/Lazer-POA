var maps = document.getElementsByName('map');
/* Inicializa o mapa
 * Cria as coordenada dos locais a procurar no mapa, incluindo porto alegre
 * Cria o mapa em si
 * Cria o marcador
*/ 
function initMap() {
    var nbsteak = {lat: -30.0179456, lng: -51.1893504};
    var galpaoCrioulo = {lat: -30.0179456, lng: -51.1893504};	
    var portoAlegre = {lat: -30.0317838,lng: -51.2093156};
    for(var i = 0;i<3;i++){
        var map = new google.maps.Map(maps[i], {
            zoom: 11,
            center: portoAlegre
          });
      
          var marker = new google.maps.Marker({
            position: portoAlegre,
            map: map,
            title: 'Porto Alegre'
          });
    }
    
  }

  /* Mostra o mapa
   *
  */
function showMap(location,aba) {
    //alert("showMap");
    var coordinates;
    switch (location) {
      case "nb_steak":
        coordinates = {lat: -30.0282512, lng: -51.1712306};
        break;
      case "galpao_crioulo":
        coordinates = {lat: -30.0402703, lng: -51.2376956};
        break;
      }
    
    var map = new google.maps.Map(maps[aba], {
      zoom: 15,
      center: coordinates
    });

    var marker = new google.maps.Marker({
      position: coordinates,
      map: map,
      title: location
    });
}