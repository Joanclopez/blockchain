
# Readme #

This is the readme for this project.  It will include all the instructions need to run it.

# Requirements #
Nodejs
Git
Docker
VS code

# Running with nodejs #
```npm install```
```Rename .env copy to .env and put your data```

### Run ###
To distribute founds
```node distribute.js```

Get Wallet information
```node wallet.js```
Get signature
```node sign.js```



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

### run docker-compose ###
```docker-compose up```

to run it in detached mode:

```docker-compose up -d```




