#!/bin/bash
#
. env.conf
rm -rf $IOTA_HOME/iri-*
rm -rf $IOTA_HOME/iri
cd $IOTA_HOME
git clone $1
cd $IOTA_HOME/iri
mvn clean compile
mvn package
cd $IOTA_HOME/iri/target
mv iri-1* $IOTA_HOME/. 
