import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {LayoutComponent} from './layout/layout.component';
import { CommonModule } from '@angular/common';
import { DatepickerComponent } from './material/components/datepicker/datepicker.component';
import { StepperComponent } from './material/components/stepper/stepper.component';
import { DialogComponent } from './material/components/dialog/dialog.component';
import { SignupFormComponent } from './material/components/signup-form/signup-form.component';
import { SnackbarComponent } from './material/components/snackbar/snackbar.component';
import { SnackbarContentComponent } from './material/components/snackbar-content/snackbar-content.component';
import { TabsComponent } from './material/components/tabs/tabs.component';
import { MenuComponent } from './material/components/menu/menu.component';
import { ExpansionPanelComponent } from './material/components/expansion-panel/expansion-panel.component';
import { GridListComponent } from './material/components/grid-list/grid-list.component';
import { ResolverService } from './resolver.service';
import {AakanshaLibService} from 'aakansha-lib'
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';



const routes: Routes = [
  {
    path:'',
    component:SignupFormComponent
  },
 
  {
  path: 'layout',
  component: LayoutComponent,
  children: [{
    path: 'datepicker',
    component: DatepickerComponent
  },
  {
    path:'stepper',
    component:StepperComponent
  },
  {
    path:'dialog',
    component:DialogComponent
  },
  {
    path:'snackbar',
    component:SnackbarComponent
  },
  {
    path:'tabs',
    component:TabsComponent
  },
  {
    path:'menu',
    component:MenuComponent
  },
  {
    path:'expansion',
    component:ExpansionPanelComponent
  },
  {
    path:'gridlist',
    component:GridListComponent
  }
],
},
{
  path:'users',
  component:UsersComponent,
  resolve: {
    users:ResolverService
  }
}

];  

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ResolverService]
})
export class AppRoutingModule { }
