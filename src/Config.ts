import Hapi, { Server } from "@hapi/hapi";
import { MainRouteHandlers } from "./RouteHandlers/MainRouteHandlers";

export class Config {
    static ConfigureServer() {
        const server: Server = Hapi.server({
            port: process.env.PORT || 4000,
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