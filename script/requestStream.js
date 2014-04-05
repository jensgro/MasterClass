/*
  Anforderungen
  -------------
  1. requestStream() fordert Zugriff auf die Kamera an
  2. requestStream() gibt ein Promise zurück
      2.1 wird der Zugriff auf die Kamera gewährt, wird das Promise mit dem
          Stream-Objekt aufgelöst
      2.2 wird der Zugriff auf die Kamera nicht gewährt oder gibt es einen
          Fehler, wird das Promise mit einem Error rejected
*/

define(['q'], function(Q){

  return function requestStream(){

    var deferred = Q.defer();

    // 1. Zufgriff auf die Kamera anfordern
    navigator.getUserMedia({
      video: true,
      audio: false
    }, function(stream){
      var url = window.URL.createObjectURL(stream);
      deferred.resolve(url); // 2.1 Promise mit Stream-Objekt auflösen
    }, deferred.reject);     // 2.2 Promise mit Error-Objekt rejecten

    // 2. Promise zurückgeben
    return deferred.promise;

  };

});