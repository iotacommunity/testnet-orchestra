#!/bin/bash -x
#
. env.conf
cd $IOTA_HOME
pid=`ps -ef | grep java | grep iri- | awk '{print $2}'`
pid=X$pid
if [ "$pid" == "X" ]
then
rm -f *.iri
rm -rf testnetdb
fi
