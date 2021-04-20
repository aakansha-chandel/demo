import { AreaChartComponent } from './material/components/area-chart/area-chart.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {LayoutComponent} from './layout/layout.component';
import { CommonModule } from '@angular/common';
import { DatepickerComponent } from './material/components/datepicker/datepicker.component';
import { DialogComponent } from './material/components/dialog/dialog.component';
import { SignupFormComponent } from './material/components/signup-form/signup-form.component';
import { TabsComponent } from './material/components/tabs/tabs.component';
import { GridListComponent } from './material/components/grid-list/grid-list.component';
import { ResolverService } from './resolver.service';
import {AakanshaLibService} from 'aakansha-lib'
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { LineChartComponent } from './material/components/line-chart/line-chart.component';
import { PieChartComponent } from './material/components/pie-chart/pie-chart.component';
import { D3MapComponent } from './material/components/d3-map/d3-map.component';

const routes: Routes = [
  {
     path: '',
    component: SignupFormComponent
  },
  {
   path:  'layout',
  component: LayoutComponent,
  children: [{
     path:  'datepicker',
    component: DatepickerComponent
  },
  {
     path: 'd3-maps',
    component: D3MapComponent
  },
  {
     path: 'tabs',
    component: TabsComponent
  },
  {
     path: 'pie-chart',
    component: PieChartComponent
  },

  {
     path: 'gridlist',
    component: GridListComponent
  },
  {
     path: 'chart',
    component: AreaChartComponent
  },
  {
    path: 'line-chart',
   component: LineChartComponent
 }
],
},
{
   path: 'users',
  component: UsersComponent,
  resolve: {
    users: ResolverService
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
