#!/bin/bash
#
pid=`ps -ef | grep spammer-start.sh | awk '{print $2}'`
kill -9 $pid
pid=`ps -ef | grep nodejs | grep spammer.js | awk '{print $2}'`
kill -9 $pid
