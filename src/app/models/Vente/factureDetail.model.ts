import { Article } from "../article/article";
import { Facture } from "./facture.model";

export class FactureDetail{
   
       constructor(
        public id:number,
        public article:Article,
        public quantityOfArticle:number,
        public prixHt:number,
        public prxiTtc:number,
        public facture:Facture,
        public tvaValue:number){}
}