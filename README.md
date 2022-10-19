# markathon
Fly app for Markathon

The webapp will poll every x seconds to check for latest latitude and longitude, made by the POST `/log` request.

Local testing on moving the current location pin, just change the `lat` and `lon`:

```
curl --location --request POST 'http://localhost:3000/log/' \
--header 'Content-Type: application/json' \
--data-raw '{
    "_type": "location",
    "t": "u",
    "batt": 11,
    "lat": 51.52912,
    "lon": -0.12597,
    "tid": "SB",
    "tst": "2022-10-19 10:26:05",
    "topic": "owntracks/customer/phone"
}'
```
