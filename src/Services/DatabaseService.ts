 import { Config } from "../Config";
export class DatabaseService {
    static async Connect() {
        console.log(Config.Environment);
    }
}