import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './views/home/home.component';
import { EstadoCrudComponent } from './views/estado-crud/estado-crud.component';
import { CidadeCrudComponent } from './views/cidade-crud/cidade-crud.component';
import { RedDirective } from './directives/red.directive';
import { MyForDirective } from './directives/my-for.directive';
import { EstadoCreateComponent } from './components/estado/estado-create/estado-create.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EstadoReadComponent } from './components/estado/estado-read/estado-read.component';
import { EstadoRead2Component } from './components/estado/estado-read2/estado-read2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { EstadoUpdateComponent } from './components/estado/estado-update/estado-update.component';
import { EstadoDeleteComponent } from './components/estado/estado-delete/estado-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    EstadoCrudComponent,
    CidadeCrudComponent,
    RedDirective,
    MyForDirective,
    EstadoCreateComponent,
    EstadoReadComponent,
    EstadoRead2Component,
    EstadoUpdateComponent,
    EstadoDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
