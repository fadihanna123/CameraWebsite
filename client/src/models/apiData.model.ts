export class ILoginData {
    constructor(other?: any) {
        this.accessToken = other.accessToken;
        this.author = other.author;
        this.message = other.message;
    }
    public accessToken: string;
    public message: string;
    public author: string;
}

export class IRegisterData {
    constructor(other?: any) {
        this.message = other.message;
    }
    public message: string;
}
