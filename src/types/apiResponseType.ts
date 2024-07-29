export type TTodo = {
    "_id": string;
    author: TAuthor;
    content: string;
    isFinished: boolean;
    createdAt: number;
    dueAt?: number;
    finishedAt?: number;
    priority?: Priority;
}

type Priority = 1 | 2 | 3 | 4 | 5;

type TAuthor = {
    "_id": string;
    username: string;
}

export type TUser = {
    id: string,
    username: string,
    email: string;
}