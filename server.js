const express = require('express')
const bodyParser = require("body-parser");
const app = express()
const port = process.env.PORT || 3000

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

sharedlat=0;
sharedlon=0;
//matchtopic='owntracks/dj/cambot3k';
matchtopic='owntracks/steve/Asha';

app.post('/log/', (req, res) => {
  owt=req.body;
  if(owt._type=="location") {
    console.log(owt)
    if(owt.topic==matchtopic) {
      sharedlat=owt.lat;
      sharedlon=owt.lon;
      console.log(`Saved ${sharedlat},${sharedlon}`)
    }
  } else {
    console.log(`Not the one ${owt._type}`)
    console.log(owt)
  }
  res.json([])
})

app.get('/where/',(req,res) => {
  res.json({ lat:sharedlat,lon:sharedlon})
})

app.use(express.static('mappages'))

app.listen(port, () => {
  console.log(`Service listening on ${port}`)
})