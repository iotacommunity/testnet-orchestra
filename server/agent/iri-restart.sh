#!/bin/bash
#
sudo chmod 666 iri.out
sudo nohup java -jar iri.jar --testnet -p 14700 > iri.out &

