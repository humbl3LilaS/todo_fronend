export type TAuth = {
    accessToken: string;
}

export type TAuthRoute = "/auth/login" | "/auth/signup";

export type TTokenInStorage = {
    accessToken: string;
    issuedTime: number;
}

export interface TLogin {
    email: string;
    password: string;
}

export interface TSignUp extends TLogin {
    username: string;
}