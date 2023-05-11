import { start, Config } from "@glue42/server";

const startServer = async () => {
    const config: Config = {
        name: "test-server",
        port: 4356,
        base: "api",
        store: {
            type: "mongo",
            connection: "mongodb://localhost:27017/server",
        },
        token: {
            secret: "mV|GuHok*+6N<C5~S|I0Wy^;Vg1!B~{KT4<U'@%6ZweX;]aw)|wkK5}QmodFl.s" // N.B. generate new random string
        },
        auth_exclusive_users: [""], // list of users that will have access to the admin ui; use auth0 ids
        auth_method: "auth0",
        auth_auth0: {
            jwksUri: "",
            audience: "",
            issuer: "",
        }
    };

    await start(config);
}

startServer();
