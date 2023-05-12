# Glue42 Server Example

This example demonstrates how to setup a Glue42 Server instance to use Auth0 authentication.

# Auth0 Setup

You need to setup a few things in Auth0 to run the example

**API**
* Used by the Server to verify tokens comming from Admin UI or other clients (Glue42 Enterprise, Glue42 Core)
* When initializing the server you need to provide jwksUri, audience (the unique identifier for the API) and issuer 

**Single Page Application**
* Used by the Admin UI to authenticate
* Make sure allowed callback, logout and web origins URLs are setup correctly. If running locally they must include http://localhost:3000
* When initializing the Admin UI component you need to provide a domain, clientId, audience (the unique identifier for the API) and redirectUri - those can be retrireved from the Auth0 configuration page


# How to run

Before you begin you need to add *.npmrc* files with the following content into _server_ and _admin-ui_ directories (placeholders can be filled in after setting up JFrog account)
```sh
registry=https://registry.npmjs.org
@glue42:registry=https://glue42.jfrog.io/artifactory/api/npm/default-npm-virtual/
//glue42.jfrog.io/artifactory/api/npm/default-npm-virtual/:_auth=<COPY_FROM_JFROG_SETUP>
//glue42.jfrog.io/artifactory/api/npm/default-npm-virtual/:email=<COPY_FROM_JFROG_SETUP>
//glue42.jfrog.io/artifactory/api/npm/default-npm-virtual/:always-auth=true
```

**Server**

1. Open *server* directory
1. Edit *src/index.ts* and add your Auth0 API app details in the *auth_auth0* object
1. If you want to access AdminUI with a specific account add it to the *auth_exclusive_users* list (using the Auth0 id)
1. Execute 
```sh
npm i
npm run start
```

**Admin UI**

1. Open admin-ui directory
1. Edit *src/index.ts* and add your Auth0 app details in the *auth_auth0* object
1. Execute 
```sh
npm i
npm run start
```

