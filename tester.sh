#!/bin/sh


payload=$(jo _type=location \
   t=u \
   batt=11 \
   lat=51.5422 \
   lon=-0.1939 \
   tid=SB \
   tst=$(date +%s) \
   topic="owntracks/steve/Asha")

echo $payload

curl --data "${payload}" -H "Content-Type: application/json" https://markathon.fly.dev/log/

