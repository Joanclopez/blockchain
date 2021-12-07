
# Readme #

This is the readme for this project.  It will include any useful links and commands to run.

## Install Visual Studio Code ##

```https://code.visualstudio.com/Download```

## Install Git ##

1. get a github account at github.com

2. install git locally

```https://github.com/git-guides/install-git```

## Install NodeJs ##

Install following the instructions at the following web page:

```https://nodejs.org/en/download/```

## Cloning a Repository ##

Create a folder for your college projects.  Go into that folder.

Inside that college folder, run:

```git clone https://github.com/eoinco/nci_2021.git```

## Updating Code in Repo from Github ##

From the terminal in Visual Studio Code (or from the command line - as long as you are in the folder), run the following command:

```git pull origin main```

## for the moment ##

you need git, nodejs and vs code installed.

## Validation Steps ##

How to tell you have git installed:

```$git version```

How to tell you have node installed:

```$node -v```

## Using your own repo ##

First, create a repo in github.

git clone into a folder

make your changes

then run the following commands:

```$git add <your updated files>```

```$git commit -m "<your commit message>"```

```$git push origin main```

## Executing a .JS file ##

To execute a javascript file using node.js, run the following command:

```$node <file name>```


## Dependencies and NPM ##

We want to use large chunks of code that others have written to interact with Ethereum, like the web3 package.  Do this, we need to set up the Node Package Manager (npm).

From inside your folder, to create your own package.json:

```$npm init```


## CURL accessing of handlers"

To POST to a route, execute the following CURL command:

```curl -XPOST http://localhost:8080/transfer -H 'content-type: application/json' -d '{"account_to": "0x4d60E7f9d4901816981a0E4c6D95F394159C6371", "amount": "123000"}'```


## Docker ##

### View running docker containers ###

```docker ps```

### build a docker container ###

```docker build -t nci/lab2021 .```

### run the image ###

```docker run -p 8090:8080 --name nci -d nci/lab2021```

### kill a running container ###
```docker kill [name]```

### start/stop a container ###
```docker start/stop [name]```

### view logs ###
```docker logs [name]```

### view logs inside a container ###
```docker logs -f [name]```

### view images on your computer ###
```docker image ls```

### clear the docker system ###
```docker system prune -f```

### remove all docker images ###
```docker image prune -a -f```
