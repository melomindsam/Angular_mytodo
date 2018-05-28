export class User {
    public nom : string;
    public prenom : string;
    public password : string;
    public email : string
    public civilite : string;
    public cgu : boolean;

    public constructor(values: Object= {}){
        Object.assign(this, values)
    }
}
