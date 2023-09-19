import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Agence } from 'src/app/models/agence/agence';
import { Fournisseur } from 'src/app/models/fournisseur/fournisseur';
import { AgenceService } from 'src/app/services/agence/agence.service';
import { FournisseurService } from 'src/app/services/fournisseur/fournisseur.service';



@Component({
  selector: 'app-add-fournisseur-modal',
  templateUrl: './add-fournisseur-modal.component.html',
  styleUrls: ['./add-fournisseur-modal.component.css']
})
export class AddFournisseurModalComponent {
  dataTypes!:Agence[] ;
  agenceIds:number[]=[];
  @Input() isAddToFournisseurVisible: boolean = false;
  form:FormGroup=new FormGroup({
    nom:new FormControl('',[Validators.required,Validators.maxLength(20)]),
    ice:new FormControl('',[Validators.required,Validators.maxLength(15),Validators.minLength(15)]),
    situation:new FormControl('',Validators.required),
    adress:new FormControl(''),
    telephone:new FormControl(''),
    agences:new FormControl('')
  });
  constructor(private agenceService:AgenceService,private fournisseurService:FournisseurService){
    
 
  
  }
  ngOnInit(){
this.loadAgences();
  }

  loadAgences(){
this.agenceService.getAllAgences().subscribe((data:any)=>{
this.dataTypes=data;
}),
console.error('Error fetching tutorials:', Error);

  }
  quitModal(){
    this.isAddToFournisseurVisible=false;
}
stopClosingModal(event:Event){
  event.stopPropagation();
}
onSubmit(){
  console.log(this.form.value);
  console.log(this.agenceIds);
  if(this.form.valid){
    const fourniseurForm=this.form.value;
  const fournisseur=new Fournisseur( this.form.get('nom')?.value, this.form.get('ice')?.value, this.form.get('situation')?.value, this.form.get('adress')?.value, this.form.get('telephone')?.value, this.form.get('countrie')?.value,this.agenceIds)
    this.fournisseurService.createFournisseur(fournisseur).subscribe((data)=>console.log("this is what we add"+data));

  }
}

onChangeAgence($event:any){
  const value:number=$event.target.value;
  const checked=$event.target.checked;
 
  if (checked === true) {
    // Add idAgence to the array agenceIds if it's checked
    this.agenceIds.push(value);
  } else {
    // Remove idAgence from the array x if it's unchecked
    const index = this.agenceIds.indexOf(value);
    if (index !== -1) {
      this.agenceIds.splice(index, 1);
    }
  }
console.log(this.agenceIds)}
}