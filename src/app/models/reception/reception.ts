import { Agence } from "../agence/agence";
import { Article } from "../article/article";
import { Fournisseur } from "../fournisseur/fournisseur";

export class Reception{
    id!:number|null;
	date_doc!:Date|null;
    date_echeance!:Date|null;
    prix_Ht!:number|null;
	prix_TTC!:number|null;
	factureRef!:string;
	 Remise!:number|null;
	 Remarque!:string|null;
	 tva!:number|null;
	 fret!:number|null;
	 agence!:Agence[];
	 articles!:Article[];
	 fournisseur!:Fournisseur;
	
}