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
situation!:boolean;
id_unite!:number;
id_famille!:number;
id_sousFamille!:number;
 agenceIds!:number[];
 fournisseurIds!:number[];
}