'use strict';

import { Server } from "@hapi/hapi";
import { Config } from "./Config";

export let server: Server;

export const init = async function(): Promise<Server> {
    server = Config.ConfigureServer();
    Config.ConfigureRoutes(server);
    return server;
};

export const start = async function (): Promise<void> {
    console.log(`Listening on ${server.settings.host}:${server.settings.port}`);
    return server.start();
};

process.on('unhandledRejection', (err) => {
    console.error("unhandledRejection");
    console.error(err);
    process.exit(1);
});