export class IUsers {
    constructor(other?: any) {
        this.id = other.id;
        this.uname = other.uname;
        this.psw = other.psw;
        this.mobnr = other.mobnr;
        this.locked = other.locked;
        this.img = other.img;
        this.email = other.email;
    }
    public id?: string;
    public uname: string;
    public email: string;
    public psw: string;
    public mobnr: string;
    public locked: number;
    public img: Buffer;
}
