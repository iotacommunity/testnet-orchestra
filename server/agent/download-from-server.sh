#!/bin/bash
#
. env.conf
cd $IOTA_HOME
wget $1$2
tar xzvf $2
