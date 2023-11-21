import { Article } from "../article/article";
import { Client } from "../client/client.models";
import { Fournisseur } from "../fournisseur/fournisseur";
import { Reception } from "../reception/reception";

export class Agence{
    public id!:number|null;
    public name!:string|null;
    public fournisseurs!:Fournisseur[];
    public articles!:Article[];
    public clients!:Client[];
    public receptions!:Reception[];
}