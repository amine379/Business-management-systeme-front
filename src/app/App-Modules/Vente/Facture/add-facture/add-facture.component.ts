import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticleService } from 'src/app/services/article/article.service';

@Component({
  selector: 'add-facture',
  templateUrl: './add-facture.component.html',
  styleUrls: ['./add-facture.component.css']
})
export class AddFactureComponent implements OnInit {
  constructor(private builder:FormBuilder,private articleService:ArticleService){
   
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
  id:this.builder.control(''),
  quantity:this.builder.control(''),
  sellingPrice:this.builder.control(''),
  tva:this.builder.control(''),
})
}
}
