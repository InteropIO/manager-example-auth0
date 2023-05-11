# Glue42 Server Example

This example demonstrates how to setup a Glue42 Server instance to use Auth0 authentication.

# What you need to run this examples

# How to run

## Server

1. Open *server* directory
1. Add a *.npmrc* file with the following content (placeholders can be filled in after setting up JFrog account)
```sh
registry=https://registry.npmjs.org
@glue42:registry=https://glue42.jfrog.io/artifactory/api/npm/default-npm-virtual/
//glue42.jfrog.io/artifactory/api/npm/default-npm-virtual/:_auth=<COPY_FROM_JFROG_SETUP>
//glue42.jfrog.io/artifactory/api/npm/default-npm-virtual/:email=<COPY_FROM_JFROG_SETUP>
//glue42.jfrog.io/artifactory/api/npm/default-npm-virtual/:always-auth=true
```
3. Edit *src/index.ts* and add your Auth0 API app details in the *auth_auth0* object
4. If you want to access AdminUI with a specific account add it to the *auth_exclusive_users* list (using the Auth0 id)
5. Execute 
```sh
npm i
npm run start
```

## Admin UI

1. Open admin-ui directory
1. Add a *.npmrc* file with the following content (placeholders can be filled in after setting up JFrog account)
```sh
registry=https://registry.npmjs.org
@glue42:registry=https://glue42.jfrog.io/artifactory/api/npm/default-npm-virtual/
//glue42.jfrog.io/artifactory/api/npm/default-npm-virtual/:_auth=<COPY_FROM_JFROG_SETUP>
//glue42.jfrog.io/artifactory/api/npm/default-npm-virtual/:email=<COPY_FROM_JFROG_SETUP>
//glue42.jfrog.io/artifactory/api/npm/default-npm-virtual/:always-auth=true
```
3. Edit *src/index.ts* and add your Auth0 app details in the *auth_auth0* object
4. Execute 
```sh
npm i
npm run start
```

