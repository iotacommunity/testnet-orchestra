#!/bin/bash
#
export IOTA_HOME=/home/admin/IOTA
cd $IOTA_HOME/agent
if [ -f /tmp/agent-exists.txt ]
then
    exit 
fi
touch /tmp/agent-exists.txt 
nohup nodejs agent.js &
