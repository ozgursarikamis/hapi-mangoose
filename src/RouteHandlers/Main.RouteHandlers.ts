import { IMessage } from "../Models/IMessage";

export class MainRouteHandlers {
    static HelloWorld(): IMessage {
        return {
            message: 'Hello World (*Interface used)..'
        }
    }
}