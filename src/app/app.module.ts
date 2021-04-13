import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from './material/material.module';
import {LayoutModule} from './layout/layout.module';
import {SharedModule} from './shared/shared.module';
import {AakanshaLibModule, AakanshaLibService} from 'aakansha-lib'
import { ResolverService } from './resolver.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    SharedModule,
    AakanshaLibModule
  ],
  exports:[],
  providers: [ResolverService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
