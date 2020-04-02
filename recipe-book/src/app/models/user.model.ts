
export class User {
    public email: string;
    public id: string;
    private _token: string;
    private _tokenExpirationDate: Date

    constructor(email: string, id: string, _token: string, _tokenExpirationDate: Date) {
        this.email = email;
        this.id = id;
        this._token = _token;
        this._tokenExpirationDate = _tokenExpirationDate;
    }

    get token(){
        let today = new Date();
        if(!this._tokenExpirationDate || today > this._tokenExpirationDate){
            return null;
        }
        return this._token;
    }
}
