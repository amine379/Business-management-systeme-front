import { Article } from "../article/article";
import { Fournisseur } from "../fournisseur/fournisseur";

export class Agence{
    public id!:number|null;
    public name!:string|null;
    public fournisseurs!:Fournisseur[];
    public articles!:Article[];
}