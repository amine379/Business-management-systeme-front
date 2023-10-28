import { Component , OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Article } from 'src/app/models/article/article';
import { ArticleService } from 'src/app/services/article/article.service';

@Component({
  selector: 'reception-details',
  templateUrl: './reception-details.component.html',
  styleUrls: ['./reception-details.component.css']
})
export class ReceptionDetailsComponent implements OnInit {
public receptionDetails: FormGroup;

 allArticles!:Article[];
 filtredAerticles!:Article[];
 articleChosen:string='';
 articleChosed!:Article;

ngOnInit(): void {
  this.getArticles();
  console.log(this.allArticles)
}
  constructor(private fb: FormBuilder,private articleService:ArticleService) {
    this.receptionDetails = this.fb.group({
      tableOfReceptionDetails: this.fb.array([],[Validators.required])
    });
    this.addReceptionDetails();
  }
  get getReceptionDetail(){
    return this.receptionDetails.controls["tableOfReceptionDetails"] as FormArray;
  }
  addReceptionDetails(){
    const form=new FormGroup({
         id:new FormControl('',[Validators.required]),
         description:new FormControl('',[Validators.required]),
         quantite:new FormControl('',[Validators.required]),
       unite:new FormControl('',[Validators.required]),
       prixUnite:new FormControl('',[Validators.required]),
        tva:new FormControl('',[Validators.required]),
         prixTtc:new FormControl('',[Validators.required])
       })
      this.getReceptionDetail.push(form);
  }
  deleteReceptionDetail(index:number){
      this.getReceptionDetail.removeAt(index);
  }

  // createFormGroup(): FormGroup {
  //   return this.fb.group({
  //     id:[,[Validators.required]],
  //   description:[,[Validators.required]],
  //      unite:[,[Validators.required]],
  //       prixUnite:[,[Validators.required]],
  //      tva:[,[Validators.required]],
  //       prixTtc:[,[Validators.required]],
  //   });
  // }

  // get getFormControls() {
  //   // const control = this.receptionDetails.get('tableRows') as FormArray;
  //   // return control;
  // }

  // addRow() {
  //   const control =  this.receptionDetails.get('tableRows') as FormArray;
  //   control.push(this.createFormGroup());
   
  // }

  // checkAll(checkVal: boolean) {
    
  //   this.getFormControls.controls.forEach(formGroup => {
  //     formGroup.get('ischecked')?.setValue(checkVal);
  //   });
  // }

  // onStatusChange(event:any, index: number) {
  //   debugger
  //   if(event.target.value == 'deactive'){
  //     const control =  this.receptionDetails.get('tableRows') as FormArray;
  //     control.controls[index].get('state')?.disable();
  //     control.controls[index].get('city')?.disable();
  //   } else {
  //     const control =  this.receptionDetails.get('tableRows') as FormArray;
  //     control.controls[index].get('state')?.enable();
  //     control.controls[index].get('city')?.enable();
  //   }
  // }

  // removeEmployee(index:number) {
  //   const control =  this.receptionDetails.get('tableRows') as FormArray;
  //   control.removeAt(index);
  // }

  // onSaveForm() {
  //   const formValue = this.receptionDetails.value;
    
  // }
  getArticles(){
    this.articleService.getAllArticles().subscribe(data=>this.allArticles=data);
  }
  filterArticleWithId(x:any){
this.filtredAerticles=this.allArticles.filter(item=>item.id.toString().includes(x))
  }
  filterArticleWithName(c:string){
    this.filtredAerticles=this.allArticles.filter(item=>item.name.toLowerCase().includes(c.toLowerCase()))
  }
  choseArticle(y:Article){
this.articleChosen=y.name;
this.articleChosed=y;

  }
}
