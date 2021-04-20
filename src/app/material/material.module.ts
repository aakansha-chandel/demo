import {NgModule} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule,MatRippleModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatChipsModule} from '@angular/material/chips';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatTreeModule} from '@angular/material/tree';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import {SharedModule} from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { TabsComponent } from './components/tabs/tabs.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatExpansionModule} from '@angular/material/expansion';
import { GridListComponent } from './components/grid-list/grid-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import {AakanshaLibModule} from 'aakansha-lib';
import { AreaChartComponent } from './components/area-chart/area-chart.component'
// tslint:disable-next-line: max-line-length
import { DialogComponent, DialogFruitComponent, DialogTajmahalComponent, DialogWelcomeComponent } from './components/dialog/dialog.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { D3MapComponent } from './components/d3-map/d3-map.component';

const mat = [
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatRippleModule,
    MatCardModule,
    MatStepperModule,
    MatChipsModule,
    DragDropModule,
    MatTreeModule,
    MatNativeDateModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    AakanshaLibModule,
    MatExpansionModule
  ];
    // tslint:disable-next-line: align
    @NgModule({
        imports: [
            mat,
            FormsModule,
            ReactiveFormsModule,
            BrowserModule,
            CommonModule,
            RouterModule,
            FlexLayoutModule,
            SharedModule
        ],
        exports: [
            mat
        ],
        declarations: [
            DialogComponent,
            DatepickerComponent,
            DialogWelcomeComponent,
            DialogFruitComponent,
            DialogTajmahalComponent,
            SignupFormComponent,
            TabsComponent,
            GridListComponent,
            AreaChartComponent,
            LineChartComponent,
            PieChartComponent,
            D3MapComponent
        ]
    })
    export class MaterialModule {

}
