// material.module.ts

import { NgModule } from '@angular/core';

import { MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule,
  MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';


@NgModule({

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCheckboxModule,
    MatCardModule


  ],
  exports: [FormsModule,
    MatDialogModule,
     MatFormFieldModule,
     MatButtonModule,
     MatInputModule,
     MatTableModule,
     MatTableModule,
     MatPaginatorModule,
     MatTableModule,
     MatPaginatorModule,
     MatSortModule,
     MatGridListModule,
     MatCheckboxModule,
     MatCardModule



  ]
})
export class MaterialModule {}
