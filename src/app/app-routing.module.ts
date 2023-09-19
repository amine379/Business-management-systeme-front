import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FournisseurComponent } from './App-Modules/fournisseur/fournisseur.component';
import { ReceptionComponent } from './App-Modules/Achat/reception/reception.component';
import { ArticleComponent } from './App-Modules/Articles/article/article.component';
import { ArticledesComponent } from './App-Modules/usingByArticle/articledes/articledes.component';

const routes: Routes = [
  {path:'fournisseur' ,component:FournisseurComponent},
  {path:'reception',component:ReceptionComponent},
  {path:'article',component:ArticleComponent},
  {path:'caractere',component:ArticledesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
