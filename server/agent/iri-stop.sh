#!/bin/bash
#
. env.conf
pid=`ps -ef | grep java | grep iri- | awk '{print $2}'`
kill -SIGINT $pid
