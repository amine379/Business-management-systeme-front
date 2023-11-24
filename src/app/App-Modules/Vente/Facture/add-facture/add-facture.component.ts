import { Component, DoCheck, OnInit, SimpleChanges } from '@angular/core';
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
export class AddFactureComponent implements OnInit, DoCheck   {
  // addede to updated 
  clients:boolean=false;
  customerChosen:Client | undefined;articleChosen:Article|undefined;
  listOfAllCllient!:Client[];
  listOfAllPaymentMode!:ModePayment[];
  listOfClientFiltred!:Client[];
  listOfAllArticles!:Article[];
  listOfArticleFilred:Article[] | undefined;
  selectedClient!:Client;
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
    this.loadListOfArticle();
   
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
  prxiTtc:this.builder.control(''),
  prixHt:this.builder.control(''),
  tva:this.builder.control(''),
})
}
onSubmit(){
 
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
loadListOfArticle(): void{
  this.articleService.getAllArticles().subscribe(
    data => this.listOfAllArticles = data
  );
    
}
setClientToForm(client:Client)
{
  this.factureForm.controls['client'].patchValue(client.nom);
  this.factureForm.controls['ice'].patchValue(client.ice);
console.log(this.factureForm.value);
}
clientIsEmpty():boolean{
  const clientValue = this.factureForm.get('client')?.value;
    return clientValue === '' || clientValue === null || clientValue === undefined;
}

sumPrixHt: number = 0;
calculateSum() {
  this.sumPrixHt = this.article.controls
    .map((a: any) => a.get('prixHt')!.value || 0)
    .reduce((acc, value) => acc + value, 0);
    console.log(this.sumPrixHt);
    console.log(this.factureForm)
}
// calculTva(){
//   this.article.controls.map((a:any)=>a.get('prixHt')*)
// }
hii(){
  console.log("mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm"+this.factureForm.value);
  console.log(this.factureForm.value);
}

ngDoCheck() {
this.calculateSum();
}
removeVariant(index: number) {
  this.formvariant = this.factureForm.get("articleList") as FormArray;
  this.formvariant.removeAt(index);
}
//(input)="articl.patchValue({prxiTtc:articl.get('prixHt')!.value * articl.get('article')!.value.tva.value})"
patchValueOfPrixHt(index:number){
  const articleList=this.factureForm.get("articleList") as FormArray;
  articleList.at(index).patchValue(
    {prxiTtc:
      articleList.get('quantity')!.value * articleList.get('article')!.value.selling_price
    }
  )
}
patchValueOfTva(index:number){
  const articleList=this.factureForm.get("articleList") as FormArray;
  articleList.at(index).patchValue(
    {
      tva:articleList.get('article')!.value.tva.value
    }
  )

}
patchValueOfPrixTtc(index:number){
  const articleList=this.factureForm.get("articleList") as FormArray;
  articleList.at(index).patchValue(
    {
      prxiTtc:articleList.get('prixHt')!.value*(1+articleList.get('article')!.value.tva.value)
    }
  )
}

 /*asyncPatchValues(index:number) {
  return new Promise((resolve, reject) => {
    // Function 1: patchValueOfPrixHt
    this.patchValueOfPrixHt(index);
    
    // Assuming patchValueOfPrixHt is synchronous, we can proceed to the next function

    // Function 2: patchValueOfTva
    try {
      this.patchValueOfTva(index);
    } catch (error) {
      reject(error);
      return;
    }

    // Function 3: patchValueOfPrixTtc
    try {
      this.patchValueOfPrixTtc(index);
    } catch (error) {
      reject(error);
      return;
    }

    resolve('All patch operations completed successfully');
  });
  console.log(this.factureForm)
}*/


patchValueOfPrixHtAndHt(i:number){
  const articleList=this.factureForm.get("articleList") as FormArray;
}
}
