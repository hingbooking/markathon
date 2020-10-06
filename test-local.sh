#!/bin/sh


payload=$(jo _type=location \
   t=u \
   batt=11 \
   lat=51.419891 \
   lon=-0.078449 \
   tid=SB \
   tst=$(date +%s) \
   topic="owntracks/mark/Markphone1")

echo $payload

curl --data "${payload}" -H "Content-Type: application/json" http://localhost:3000/log/

