import { Config } from "../Config";
import * as mongoose from "mongoose";

export class DatabaseService {
    static async Connect() {
        Config.GetConfiguration();
        mongoose.connect(process.env.DATABASE_CONNECTION_STRING || '', {})
            .catch((err) => {
                console.error(err);
            })
            .finally(() => {
                // console.log("Final statement");
            });
    }
}