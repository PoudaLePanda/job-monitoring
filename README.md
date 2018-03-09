# job-monitoring
+ Uses Express as the application Framework.
+ Manages Sessions using [express-session](https://github.com/expressjs/session) package.
+ Authenticates via username and password using [Passport](https://github.com/jaredhanson/passport).
+ Passwords are hashed using [bcrypt-nodejs](https://github.com/shaneGirish/bcrypt-nodejs) package.
+ Real-time communication between a client and a server using [Socket.io](https://github.com/socketio/socket.io).
+ Uses [MongoDB](https://github.com/mongodb/mongo), [Mongoose](https://github.com/Automattic/mongoose).
+ Stores session in a [MongoDB](https://github.com/mongodb/mongo) using [connect-mongo](https://github.com/kcbanner/connect-mongo); a MongoDB-based session store.
+ Uses [Redis](https://github.com/antirez/redis) as an Adapter for [Socket.io](https://github.com/socketio/socket.io).
+ Logging Errors and Exceptions using [Winston](https://github.com/winstonjs/winston).

## Usage
+ Clone this repo
for https
```sh
git clone https://github.com/PoudaLePanda/job-monitoring.git
```
for ssh
```sh
git clone git@github.com:PoudaLePanda/job-monitoring.git
```
+ Go into that folder
```sh
cd job-monitoring
```
+ Navigate to the client folder
```sh
cd client
```
+Use either yarn or npm to install the dep's
for npm
```sh
npm install
```

## Run 
```sh
npm start
``` 
and visit the local url in the browser
> Note: It specifies the port after running that command

Then navigate the server folder do the same once installed execute
```sh
nodemon server.js
```
and enjoy :)

> link for tutorials : https://www.callicoder.com/node-js-express-mongodb-restful-crud-api-tutorial/
> https://medium.com/@REPTILEHAUS/angular-2-and-socket-io-chat-app-f56afb9ceeb2
> https://github.com/OmarElGabry/chat.io/tree/master/app

