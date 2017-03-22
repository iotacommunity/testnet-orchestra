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

Make a crontab entry so that the agent webserver is started in the background and also on reboot of the system:
Execute the command **`crontab -e`**
Add a line at the bottom that looks like this:

...
\* \* \* \* \*  /home/iota/IOTA/agent/agent-start.sh
...

Crontab will try every minute to start the agent, unless the file **`/tmp/agent-exists.txt'** is found. That file is automatically created when the agent is started the 1st time after a reboot.
#### OPERATION

The operations are accessed via HTTP REST calls.

### `iri-build`


### CLIENT TOOLS

#### CONFIGURATION

#### EXECUTION
