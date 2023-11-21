import { Date } from "mongoose";
import { Client } from "../client/client.models";
import { ModePayment } from "./modePayment.models";
import { FactureDetail } from "./factureDetail.model";

export class Facture{
 id!:number;
 client:Client;
referance:string;
 dateFacture:Date;
 modePayment:ModePayment;
 factureDetails:FactureDetail[];
totalHt!:number;
remise!:number; 
tva!:number;
remarque:string;
 constructor(
    client:Client,
   referance:string,
    dateFacture:Date,
   modePayment:ModePayment,
   factureDetails:FactureDetail[],
    remarque:string)
{
    this.client=client;
    this.referance=referance;
    this.dateFacture=dateFacture;
    this.modePayment=modePayment;
    this.factureDetails=factureDetails;
    this.remarque=remarque;
}
 
}
