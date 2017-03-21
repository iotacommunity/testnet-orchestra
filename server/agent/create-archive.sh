#!/bin/bash
#
. env.conf
cd $IOTA_HOME
rm -f $2
tar czvf $2 $1
