export interface IMessage {
    message: string;
    handler?: () => void;
}