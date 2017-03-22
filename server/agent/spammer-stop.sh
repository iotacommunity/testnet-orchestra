#!/bin/bash
#
. env.conf
cd $IOTA_HOME/IOTA-ValueSpammer
touch stop-spam
pid=`ps -ef | grep spammer-start.sh | awk '{print $2}'`
kill -9 $pid
pid=`ps -ef | grep nodejs | grep spammer.js | awk '{print $2}'`
kill -9 $pid

