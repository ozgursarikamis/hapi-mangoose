import Hapi, { Server } from "@hapi/hapi";
import { MainRouteHandlers } from "./RouteHandlers/Main.RouteHandlers";

import dotenv from 'dotenv';
import { Environment, Host } from "./Constants/Strings";
import { HTTPMethods } from "./Constants/HTTPMethods";
import { CoursesRoutes } from "./RouteHandlers/Entities/Courses.Routes";
import { CoursesHandler } from "./RouteHandlers/Entities/Courses.Handler";
import { ListingsRoutes } from "./RouteHandlers/Entities/Listings.Routes";
import { ListingsHandler } from "./RouteHandlers/Entities/Listings.Handler";

export class Config {
    private static MainEnvironmentPath: string = './env/.env';
    private static Environment: string = process.env.NODE_ENV || Environment.Development;

    static GetConfiguration(): void {
        const configPath = `${this.MainEnvironmentPath}.${this.Environment}`;
        dotenv.config({ path: configPath });
    }

    static ConfigureServer() {
        this.GetConfiguration();
        const port = process.env.PORT || Host.DefaultPort;
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

        server.route({
            method: HTTPMethods.GET,
            path: '/api/v1' + CoursesRoutes.GetCourses,
            handler: CoursesHandler.GetAllCourses
        });

        server.route({
            method: HTTPMethods.GET,
            path: '/api/v1' + ListingsRoutes.GetListings,
            handler: ListingsHandler.GetAllListings
        })
    }
}