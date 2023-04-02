import Hapi, { Server } from "@hapi/hapi";
import { MainRouteHandlers } from "./RouteHandlers/MainRouteHandlers";

import dotenv from 'dotenv';

export class Config {
    static ConfigureServer() {
        const configPath = `./env/.env.${process.env.NODE_ENV || "development"}`;
        dotenv.config({ path: configPath });
        const port = process.env.PORT || 4000;
        const server: Server = Hapi.server({
            port,
            host: '0.0.0.0'
        });

        return server;
    }
    static ConfigureRoutes(server: Server) {
        server.route({
            method: 'GET',
            path: '/',
            handler: MainRouteHandlers.HelloWorld
        });
    }
}