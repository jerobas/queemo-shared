export enum SOCKET_EVENTS {
    CONNECT = "connect",
    DISCONNECT = "disconnect",

    USER_JOIN = "user:join",
    USER_JOINED = "user:joined",
    USER_LEAVE = "user:leave",
    USER_LEFT = "user:left"
}

export interface User {
    id: string;
    name: string;
    peerId: string;
    summonerId: string;
}

export interface Room {
    id: string;
    players: User[];
}