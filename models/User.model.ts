export interface IUser {
    user: any;
    token: string;
    isSignedIn: boolean;
}

export class User implements IUser {
    constructor(
        public user: any,
        public token: string,
        public isSignedIn: boolean
    ) { }
}