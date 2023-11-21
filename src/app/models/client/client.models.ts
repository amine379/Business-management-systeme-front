import { Facture } from "../Vente/facture.model";
import { Agence } from "../agence/agence";

export class Client{
     id:number;
	 nom:string;
	 ice:string;
	 situation:boolean;
	 adress:string;
	telephone:number;
 resteaPayer:number;
  agences:Agence[];
factures:Facture[];
constructor(id:number,nom:string,ice:string,situation:boolean,adress:string,telephone:number,resteaPayer:number,agences:Agence[],factures:Facture[]){
this.id=id;this.nom=nom;this.ice=ice;this.situation=situation;this.adress=adress;this.telephone=telephone;
this.resteaPayer=resteaPayer;this.agences=agences;this.factures=factures;
}

}