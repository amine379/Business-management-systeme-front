import { Article } from "../article/article";
import { Reception } from "./reception";

export class ReceptionDetail{
    id!:number|null;
    article!:Article|null;
    quantite!:number|null;
    prixTtc!:number|null;
    reception!:Reception|null;
    constructor(article:Article,quantite:number,prixTtc:number,reception:Reception){
        this.article=article;this.quantite=quantite;this.prixTtc=prixTtc;this.reception=reception;
    }
}