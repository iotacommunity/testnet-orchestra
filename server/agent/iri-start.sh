#!/bin/bash
#
. env.conf
cd $IOTA_HOME
rm -f startup.sh
echo $1 >startup.sh
chmod 700 startup.sh
./startup.sh 1>iri.log 2>&1
