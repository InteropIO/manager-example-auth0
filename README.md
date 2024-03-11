# io.Manager Auth0 Example

This example demonstrates how to setup a io.Manager instance to use Auth0 authentication.

# Auth0 Setup

You need to setup a few things in Auth0 to run the example

**API**
* Used by the **Server** to verify tokens coming from **Admin UI** or other clients (io.Connect Desktop/Browser)
* When initializing the server you need to provide **issuerBaseURL**, **audience** (the unique identifier for the API) and **tokenSigningAlg** - check Auth0 docs on how to retrieve those for your application
* You need to add an permission called **admin** to that API - this permission needs to be granted to users that can manage the server 

Example for setting up the API permissions
![image](https://github.com/Glue42/server-example-auth0/assets/6021897/9449268a-e71b-4bd7-b2e8-60a44608e4d5)

**Single Page Application**
* Used by the Admin UI to authenticate
* Make sure allowed callback, logout and web origins URLs are setup correctly. If running locally they must include http://localhost:3000
* When initializing the Admin UI component you need to provide a domain, clientId, audience (the unique identifier for the API) and redirectUri - those can be retrireved from the Auth0 configuration page


# How to run

**Prerequisites** 

_**Setup MongoDB or other database**_

io.Manager requires a database to connect to - this example depends on MongoDB, but you can use any other of the supported databases. You will need to either have a local instance or setup a remote database to connect to.

_**Setup access to Glue42 Artifactory**_

Before you begin you need to add *.npmrc* files with the following content into _server_ and _admin-ui_ directories (placeholders can be filled in after setting up JFrog account)
```sh
registry=https://glue42.jfrog.io/artifactory/api/npm/default-npm-virtual/
always-auth=true
email=<COPY_FROM_JFROG_SETUP>
//glue42.jfrog.io/artifactory/api/npm/default-npm-virtual/:_auth=<COPY_FROM_JFROG_SETUP>
```

**Starting the server**

1. Open *server* directory
1. Edit *src/index.ts* and add your Auth0 API app details in the *auth_auth0* object
1. If you want to have to the AdminUI with a specific account add it to the *auth_exclusive_users* list (using the Auth0 id)
2. Edit the MongoDB connection string (store.connection property of the config object)
3. Execute 
```sh
npm i
npm run start
```

**Protecting Admin UI with Auth0**

1. Open admin-ui directory
1. Edit *src/index.ts* and add your Auth0 app details in the *auth_auth0* object
1. Execute 
```sh
npm i
npm run start
```

**Protecting io.Connect Desktop with Auth0**

1. Setup th login page:

* Fill in Auth0 details in [*auth_config.json*](./login/auth_config.json)
* Host login page locally (e.g. using http-server) - the example bellow assumes it is hosted on http://localhost:9123


2. Configure io.Connect Desktop To connect to io.Manager Server:

To configure io.Connect Desktop to connect to the example server, use the "server" top-level key. Add the following configuration to enable connection to the io.Manager Server:

```json
{
    // other configuration above
    // copy from here....
    "server": {
        "enabled": true,
        "url": "http://localhost:4356/api"
    }
     // ...to here
}
```

This will add the Server as an additional application store. If you want the io.Manager Server to be the only app store, set the "appStores" top-level key to an empty array.

This will also instruct io.Connect Desktop to store Layouts and Application Preferences on the io.Manager Server.

**To use a custom login screen:**
To enable the custom login screen, use the "ssoAuth" top-level key

```json
{
    // other configuration above
    // copy from here....
    "ssoAuth": {
        "authController": "sso",
        "options": {
            "url": "http://localhost:9123/",
            "window": {
                "width": 400,
                "height": 550,
                "mode": "flat"
            }
        }
    }
    // ...to here
}
```
