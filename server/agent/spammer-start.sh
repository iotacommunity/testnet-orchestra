#!/bin/bash
#
. env.conf
cd $IOTA_HOME/IOTA-ValueSpammer
rm -f stop-spam
chmod 700 spammer.sh
./spammer.sh 1>spammer.log 2>&1
