import { Agence } from "../agence/agence";
import { Article } from "../article/article";
import { Reception } from "../reception/reception";

export class Fournisseur{
    public id!:number;
    public nom!:string;
    public ice!:number;
    public situation!:boolean;
    public adress!:string;
    public telephone!:number;
    //reste a paye
    public countrie!:string;
public agence!:Agence[];
    public agenceIds?:number[];
    constructor(nom:string,ice:number,situation:boolean,adress:string,telephone:number,countrie:string,agencIds:number[]){
this.nom=nom;this.ice=ice;this.situation=situation;this.adress=adress;this.telephone=telephone;this.countrie=countrie;this.agenceIds=agencIds;
    }
   

}