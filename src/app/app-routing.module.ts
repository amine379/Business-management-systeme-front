import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FournisseurComponent } from './App-Modules/fournisseur/fournisseur.component';
import { ReceptionComponent } from './App-Modules/Achat/reception/reception.component';

const routes: Routes = [
  {path:'fournisseur' ,component:FournisseurComponent},
  {path:'reception',component:ReceptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
