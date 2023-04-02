import Hapi, { Server } from "@hapi/hapi";
import { MainRouteHandlers } from "./RouteHandlers/Main.RouteHandlers";

import dotenv from 'dotenv';
import { Environment, Host } from "./Constants/Strings";
import { HTTPMethods } from "./Constants/HTTPMethods";

export class Config {
    static MainEnvironmentPath: string = './env/.env';
    static Environment: string = process.env.NODE_ENV || Environment.Development;
    static ConfigureServer() {
        const configPath = `${this.MainEnvironmentPath}.${this.Environment}`;
        dotenv.config({ path: configPath });
        const port = process.env.PORT || Host.Port;
        const server: Server = Hapi.server({
            port,
            host: Host.IPAddress.toString()
        });

        return server;
    }
    static ConfigureRoutes(server: Server) {
        server.route({
            method: HTTPMethods.GET,
            path: Host.IndexRoute.toString(),
            handler: MainRouteHandlers.HelloWorld
        });
    }
}