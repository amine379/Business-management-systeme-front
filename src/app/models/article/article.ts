import { Agence } from "../agence/agence";
import { Fournisseur } from "../fournisseur/fournisseur";
import { Tva } from "../tva/tva";
import { Unite } from "../unite/unite";

export class Article{
 id!:number;
name!:string;
purchase_price!:number;
selling_price!:number;
tva!:Tva;
 stock!:number;
 unite!:Unite;
 active!:boolean;
articleFamille!:string;
 articleSousFamilles!:string;
// id_unite!:number;
 agence!:Agence[];
 fournisseur!:Fournisseur[];

}