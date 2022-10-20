var mymarker=null

async function updateMark() {
    try {
        marklocation=fetch("/where/").then(response => 
            response.json().then(data => {
                marklocation=data
                console.log(marklocation)
                if(mymarker==null) {
                  var carIcon = L.icon({
                    iconUrl: "images/Car1.png",
                    iconAnchor: [marklocation.lat,marklocation.lon]
                  });
                  mymarker=L.marker([marklocation.lat,marklocation.lon], {icon: carIcon}).addTo(map);
                } else {
                    var newLatLng = new L.LatLng(marklocation.lat, marklocation.lon);
                    mymarker.setLatLng(newLatLng);  
                }
            }));
    } catch(err) {
        console.log(err); // Failed to fetch
      }
}