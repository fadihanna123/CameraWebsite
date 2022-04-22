export class ILoginForm {
    constructor(other?: any) {
        this.uname = other.uname;
        this.psw = other.psw;
    }
    public uname: string;
    public psw: string;
}

export class IRegisterForm {
    constructor(other?: any) {
        this.uname = other.uname;
        this.email = other.email;
        this.mobnr = other.mobnr;
        this.psw = other.psw;
        this.repsw = other.repsw;
        this.img = other.img;
    }
    public uname: string;
    public email: string;
    public mobnr: string;
    public psw: string;
    public repsw: string;
    public img: string;
}
