import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { NgxLoadingModule } from 'ngx-loading';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MathComponent } from './pages/math/math.component';
import { FormpageComponent } from './pages/formpage/formpage.component';
import { CrudComponent } from './pages/crud/crud.component';
import { LatihanComponent } from './pages/latihan/latihan.component';
import { PeminjamanComponent } from './pages/peminjaman/peminjaman.component';

@NgModule({
  declarations: [
    AppComponent,
    MathComponent,
    FormpageComponent,
    CrudComponent,
    LatihanComponent,
    PeminjamanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxLoadingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
