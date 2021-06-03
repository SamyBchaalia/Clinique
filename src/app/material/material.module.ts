import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from "@angular/material/icon"
import {MatListModule} from '@angular/material/list'
import {MatGridListModule} from '@angular/material/grid-list'
import {MatInputModule} from '@angular/material/input'
import {MatFormFieldModule} from "@angular/material/form-field"
import {MatButtonModule} from "@angular/material/button"
import {MatSnackBarModule} from "@angular/material/snack-bar"
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator'
import {MatSortModule} from "@angular/material/sort"
import {MatDialogModule} from "@angular/material/dialog"
import {MatRadioModule} from "@angular/material/radio"



import { from } from 'rxjs';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import {MatDatepickerModule} from "@angular/material/datepicker"
import { MatSelectModule } from '@angular/material/select';




@NgModule({
  declarations: [],
  imports: [
   
   MatSelectModule,MatNativeDateModule,MatDatepickerModule ,MatOptionModule, MatRadioModule, MatDialogModule, MatSortModule,MatPaginatorModule,MatTableModule, MatSnackBarModule,MatButtonModule, MatFormFieldModule, MatInputModule,CommonModule,MatToolbarModule,MatSidenavModule,MatIconModule,MatListModule,MatGridListModule,
  ],
  exports:[MatSelectModule,MatNativeDateModule,MatDatepickerModule,MatOptionModule,MatRadioModule,MatDialogModule,MatSortModule,MatPaginatorModule,MatTableModule,MatSnackBarModule,MatButtonModule,MatFormFieldModule,MatInputModule,MatToolbarModule,MatSidenavModule,MatIconModule,MatListModule,MatGridListModule]
})
export class MaterialModule {}