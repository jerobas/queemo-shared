export enum SOCKET_SERVER_EVENTS {
    DISCONNECT = "disconnect",
    USER_JOIN = "user:join",
    USER_LEAVE = "user:leave",
}

export enum SOCKET_CLIENT_EVENTS {
    USER_JOINED = "user:joined",
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