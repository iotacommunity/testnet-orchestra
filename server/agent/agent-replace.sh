#!/bin/bash
#
. env.conf
cd $IOTA_HOME
wget http://testnet.iota.cool/agent.tar
rm -rf agent.old
mv agent agent.old
tar xf agent.tar
pid=`ps -u | grep nodejs | grep agent | awk '{print $2}'`
kill -SIGINT $pid
cd $IOTA_HOME/agent
nohup nodejs agent.js


