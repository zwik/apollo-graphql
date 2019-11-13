# GraphQL on Node with Mongo
This is a little application to get to know Apollo GrapQL together with Node.js and MongoDB.

## Depencies
This application depends on `Docker`, `Node.js` and `Yarn`. If you do not want to use Docker, make sure to have MongoDB running somewhere and point to the correct location of your MongoDB instance in the `index.js` file.

## Install dependencies
Before you continue, make sure to install the dependencies
```
yarn install
````

## Start application
You can start the application by typing
```
docker-compose up
```

Or without Docker
```
yarn run start
```

This will start Mongo, data will be stored in a Docker Volume. The application can be opened in the browser at http://localhost:4000/graphql.
