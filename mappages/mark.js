var mymarker=null

async function updateMark() {
    try {
        marklocation=fetch("/where/").then(response => 
            response.json().then(data => {
                marklocation=data
                console.log(marklocation)
                if(mymarker==null) {
                    mymarker=L.marker([marklocation.lat,marklocation.lon]).addTo(map);
                } else {
                    var newLatLng = new L.LatLng(marklocation.lat, marklocation.lon);
                    mymarker.setLatLng(newLatLng);  
                }
            }));
    } catch(err) {
        console.log(err); // Failed to fetch
      }
}