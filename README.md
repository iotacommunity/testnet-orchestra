# testnet-orchestra
Tools to orchestrate a IOTA testnet

## INSTALLATION
To use this app you'll first need a working (**IOTA IRI node**)[https://github.com/iotaledger/iri].  You'll also need (**node**)[https://nodejs.org] and **npm** (included with node) installed on your system.  

### SERVER TOOLS
To install, clone this repo, open a terminal to the directory of the cloned repo and type:

`npm install`

Now you are ready to configure and use this tool.

#### CONFIGURATION
Copy the directory **`agent`** into the directory **`$IOTA_HOME/agent`**
Make the shell scripts executable:
```
cd $IOTA_HOME/agent
chmod 700 *.sh
```

Make a crontab entry so that the agent webserver is started in the background and also on reboot of the system:
Execute the command **`crontab -e`**
Add a line at the bottom that looks like this:
```
* * * * *  /home/iota/IOTA/agent/agent-start.sh
```
Crontab will try every minute to start the agent, unless the file **`/tmp/agent-exists.txt'** is found. That file is automatically created when the agent is started the 1st time after a reboot.

#### DISCLAIMER
The access to these tools is open to the world if you don't protect port 8091 by firewall rules.
Do not install these tools on a server where your Bitcoin wallet or IOTA client runs!


#### OPERATION

The operations are accessed via HTTP REST calls.

IMPORTANT:  All these operations assume the the path to the IOTA runtime directory is set correctly in the file
```
$IOTA_HOME/agent/
```

### `iri-build`
Get sources from Github and build them.
The URL of the repo and, if applicable, the branch must be specified in the json POST content.
Example with curl:
```
curl http://<your-node-ip>:8091/iri-build -H 'Content-Type: application/json' -d '{"repo": "https://github.com/iotaledger/iri.git -b testnet-rocks"}'
```

### `file-exists`
Check if the IRI jar file could be created.
This command can be used to check the existance of any file with a path relative to $IOTA_HOME
Example with curl:
```
curl -s http://<your-node-ip>:8091/file-exists -H 'Content-Type: application/json' -d '{"name": "'iri-1.1.3.2.jar'" }''
```

### `iri-start`
Start IRI.
The argument 'startcmd' contains the complete Jave start command including all the options an program arguments.
Example with curl:
```
curl http://<-your-node-ip>:8091/iri-start -s -H 'Content-Type: application/json' -d '{"startcmd": "java -jar <iri-jar-file> -p 14700 --remote --headless -n 'udp://<neighbor-1-IP>:14700 tcp://<neighbor-2-IP>:15600'"}'
```

### `iri-stop`
Stop IRI.
Because there may be several java processes running an the node, the name of the jar file has to be specified as an argument.
Example with curl:
```
curl http://<your-node-ip>:8091/iri-stop -s -H 'Content-Type: application/json' -d '{"irijar": "iri-1.1.3.2.jar"}'
```

### `iri-clean`
Delete the IRI database files.
Example with curl:
```
curl http://<your-node-ip>:8091/iri-clean
```

### `upload-to-server`
Upload a file to the server.
You can upload a compressed tar archive (\*.tgz) and it will be extracted relative to $IOTA_HOME.
Note that the uri must be terminated with the / character! The uri describes the server from which the archive will be fetched. The underlying script will use **`wget`** to download the file from that uri to the node.
Example with curl:
```
curl http://<your-node-ip>:8091/upload-to-server -s -H 'Content-Type: application/json' -d '{"uri": "http://testnet.iota.cool/", "archive": "testnetdb.tgz"}'
```

### `create-archive`
Create a compressed tar archive of the given file or path.
Again, the path or filename is relative to the $IOTA_HOME directory.
Example with curl:
```
curl http://<your-node-ip>:8091/create-archive -s -H 'Content-Type: application/json' -d '{"path": "iri.log"}'
```

### `download-from-server`
Download the named file. The path is relative to $IOTA_HOME
Example with curl:
```
curl http://<your-node-ip>:8091/download-from-server -s -H 'Content-Type: application/json' -d '{"archive": "iri.tgz"}'
```

### `spammer-start`
Start the spammer.
Example with curl:
```
curl http://<your-node-ip>:8091/spammer-start
```

### `spammer-stop`
Stop the spammer.
Example with curl:
```
curl http://<your-node-ip>:8091/spammer-stop
```

### `value-spammer-start`
Start the value spammer
Example with curl:
```
curl http://<your-node-ip>:8091/value-spammer-start
```

### `value-spammer-stop`
Stop the value spammer
Example with curl:
```
curl http://<your-node-ip>:8091/value-spammer-stop
```

### `agent-replace`
Stop the agent and replace the agent.js file with a new version.
Example with curl:
```
```

### CLIENT TOOLS

#### CONFIGURATION

#### OPERATION
