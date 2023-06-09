'use strict';

import { Server } from "@hapi/hapi";
import { Config } from "./Config";
import { DatabaseService } from "./Services/DatabaseService";

export let server: Server;

export const init = async function(): Promise<Server> {
    server = Config.ConfigureServer();
    Config.ConfigureRoutes(server);
    return server;
};

export const start = async function (): Promise<void> {
    await DatabaseService.Connect();
    console.log(`Listening on ${server.settings.host}:${server.settings.port}`);
    return server.start();
};

process.on('unhandledRejection', (err) => {
    console.error("unhandledRejection");
    console.error(err);
    process.exit(1);
});


// Start the server
init().then(() => start());