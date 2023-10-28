import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FournisseurComponent } from './App-Modules/fournisseur/fournisseur.component';
import { ReceptionComponent } from './App-Modules/Achat/reception/reception.component';
import { ArticleComponent } from './App-Modules/Articles/article/article.component';
import { ArticledesComponent } from './App-Modules/usingByArticle/articledes/articledes.component';
import { SigninComponent } from './layout/authen/signin/signin.component';
import { SignupComponent } from './layout/authen/signup/signup.component';
import { ForgetPasswordComponent } from './layout/authen/forget-password/forget-password.component';
import { FactureComponent } from './App-Modules/Vente/Facture/facture.component';
import { DevisComponent } from './App-Modules/Vente/devis/devis.component';


const routes: Routes = [
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'forget',component:ForgetPasswordComponent},
  {path:'fournisseur' ,component:FournisseurComponent},
  {path:'reception',component:ReceptionComponent},
  {path:'article',component:ArticleComponent},
  {path:'caractere',component:ArticledesComponent},
  {path:'facture',component:FactureComponent},
  {path:'devis',component:DevisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
