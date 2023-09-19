import { Tva } from "../tva/tva";

export class Article{
 id!:number;
 name!:string;
 purchase_price!:number;
selling_price!:number;
tva!:Tva;
 Stock!:number;
situation!:boolean;
id_unite!:number;
id_famille!:number;
id_sousFamille!:number;
 agenceIds!:number[];
 fournisseurIds!:number[];
}