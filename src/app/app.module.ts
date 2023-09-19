import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './Layout/dashboard/dashboard.component';
import { MainComponent } from './Layout/dashboard/main/main.component';
import { SidebarComponent } from './Layout/dashboard/sidebar/sidebar.component';
import { NavbarComponent } from './Layout/dashboard/main/navbar/navbar.component';
import { ContentComponent } from './Layout/dashboard/main/content/content.component';
import { FooterComponent } from './Layout/dashboard/main/footer/footer.component';
import { FournisseurComponent } from './App-Modules/fournisseur/fournisseur.component';
import { DAComponent } from './App-Modules/Achat/da/da.component';
import { BcComponent } from './App-Modules/Achat/bon-commande/bc.component';
import { ReceptionComponent } from './App-Modules/Achat/reception/reception.component';
import { PaymentComponent } from './App-Modules/Achat/payment/payment.component';
import { AddFournisseurModalComponent } from './App-Modules/fournisseur/add-fournisseur-modal/add-fournisseur-modal.component';
import { ArticleComponent } from './App-Modules/Articles/article/article.component';
import { AddModalArticleComponent } from './App-Modules/Articles/add-modal-article/add-modal-article.component';
import { UniteComponent } from './App-Modules/Unite/unite/unite.component';
import { FamilleComponent } from './App-Modules/Unite/famille/famille.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FamilleModalComponent } from './App-Modules/usingByArticle/Famille/famille-modal/famille-modal.component';
import { SousFamilleModalComponent } from './App-Modules/usingByArticle/SousFamille/sous-famille-modal/sous-famille-modal.component';
import { TvaModalComponent } from './App-Modules/usingByArticle/Tva/tva-modal/tva-modal.component';
import { UniteModalComponent } from './App-Modules/usingByArticle/unite/unite-modal/unite-modal.component';
import { ArticledesComponent } from './App-Modules/usingByArticle/articledes/articledes.component';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    DashboardComponent,
    MainComponent,
    SidebarComponent,
    NavbarComponent,
    ContentComponent,
    FooterComponent,
    FournisseurComponent,
    DAComponent,
    BcComponent,
    ReceptionComponent,
    PaymentComponent,
    AddFournisseurModalComponent,
    ArticleComponent,
    AddModalArticleComponent,
    UniteComponent,
    FamilleComponent,
    FamilleModalComponent,
    SousFamilleModalComponent,
    TvaModalComponent,
    UniteModalComponent,
    ArticledesComponent,
   

  
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
