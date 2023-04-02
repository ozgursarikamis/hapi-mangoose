import { message } from "./helper";
import fs from 'fs';

console.log(fs);

export class Main {
    constructor() {
        console.log("Main Class ctor");
        console.log(message);
    }
}

new Main();