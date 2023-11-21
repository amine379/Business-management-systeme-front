import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModePayment } from 'src/app/models/Vente/modePayment.models';
import { Article } from 'src/app/models/article/article';
import { Client } from 'src/app/models/client/client.models';
import { ArticleService } from 'src/app/services/article/article.service';
import { ClientService } from 'src/app/services/client/client.service';
import { ModePaymentService } from 'src/app/services/vente/mode-payment.service';

@Component({
  selector: 'add-facture',
  templateUrl: './add-facture.component.html',
  styleUrls: ['./add-facture.component.css']
})
export class AddFactureComponent implements OnInit {
  // addede to updated 
  customerChosen:Client | undefined;articleChosen:Article|undefined;
  listOfAllCllient!:Client[];
  listOfAllPaymentMode!:ModePayment[];
  listOfClientFiltred!:Client[];
  listOfAllArticles!:Article[];
  listOfArticleFilred:Article[] | undefined;
  findByIce(ice:string){
this.listOfClientFiltred=this.listOfAllCllient.filter(client=>client.ice.toLocaleLowerCase().includes(ice.toLocaleLowerCase()))
  }
  findByName(name:string){
    this.listOfClientFiltred=this.listOfAllCllient.filter(client=>client.nom.toLocaleLowerCase().includes(name.toLocaleLowerCase()))
  }
  findArticleByName(designation:string){
this.listOfArticleFilred=this.listOfAllArticles.filter(article=>article.name.toLocaleLowerCase().includes(designation.toLocaleLowerCase()))
  }


  //end of traitement
  constructor(private builder:FormBuilder
    ,private articleService:ArticleService,
    private clientService:ClientService,
    private modePaymentService:ModePaymentService
    ){
   
  }
  factureForm!:FormGroup;
  ngOnInit(): void {
    this.factureForm= new FormGroup({
      client: this.builder.control('', Validators.required),
      ice:this.builder.control('', Validators.required),
      referance:this.builder.control('', Validators.required),
      dateFacture:this.builder.control('', Validators.required),
      modePayment:this.builder.control(''),
      articleList: this.builder.array([])
    });
    this.loadListOfClient();
    this.loadListOfPaymentMode();
    this.loadListOfArticle()
  }
 
  formvariant !: FormArray<any>;
get article(){
  return this.factureForm.get("articleList") as  FormArray;

}
addVariant(){
this.formvariant= this.factureForm.get("articleList") as  FormArray;
this.formvariant.push(this.generateRow());


}
generateRow(){
return this.builder.group({
  article:this.builder.control(''),
  quantity:this.builder.control(''),
  sellingPrice:this.builder.control(''),
  tva:this.builder.control(''),
})
}
onSubmit(){
  console.log("Hello from onSubmit ..");
  if(this.factureForm.valid){
    console.log(this.factureForm.value);
  }
}
loadListOfClient(){
  this.clientService.getAllclient().subscribe(data=>
    this.listOfAllCllient=data
    )
   
}
loadListOfPaymentMode(){
  this.modePaymentService.getAllPaymenntMode().subscribe(data=>
    this.listOfAllPaymentMode=data)
}
loadListOfArticle(){
  this.articleService.getAllArticles().subscribe(data=>
    this.listOfAllArticles=data)
}

choseClient(client:Client){
  this.customerChosen=client;
  this.factureForm.patchValue(
    {client:client}
  )
this.listOfClientFiltred=[];
  
}
choseArticle(article:Article,i:number){
this.articleChosen=article;

const articleList=this.factureForm.get("articleList") as FormArray;
articleList.at(i).patchValue({
  article:article
})
this.listOfArticleFilred=undefined;
console.log(this.listOfArticleFilred);

}
updateClientForm(){
  this.factureForm.patchValue(
    {client:null}
  )
  this.customerChosen=undefined;
}
functa(x:any){
  console.log("********************************")
  console.log(this.factureForm);
  console.log("le any"+x)
}
}
