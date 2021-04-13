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
import { DialogComponent, DialogWelcomeComponent, DialogFruitComponent, DialogTajmahalComponent } from './components/dialog/dialog.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import {SharedModule} from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { SnackbarContentComponent } from './components/snackbar-content/snackbar-content.component';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { TabsComponent } from './components/tabs/tabs.component';
import { MenuComponent } from './components/menu/menu.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';    
import { MatExpansionModule} from '@angular/material/expansion';
import { GridListComponent } from './components/grid-list/grid-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import {AakanshaLibModule} from 'aakansha-lib'

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
    @NgModule({
        imports:[
            mat,
            FormsModule,
            ReactiveFormsModule,
            BrowserModule,
            CommonModule,
            RouterModule,
            FlexLayoutModule,
            SharedModule
        ],
        exports:[
            mat
        ],
        declarations: [
            DialogComponent, 
            DatepickerComponent, 
            DialogWelcomeComponent,
            DialogFruitComponent,
            DialogTajmahalComponent,
            StepperComponent,SignupFormComponent, SnackbarComponent, SnackbarContentComponent, TabsComponent, MenuComponent, ExpansionPanelComponent, GridListComponent]
    })
    export class MaterialModule{

}
