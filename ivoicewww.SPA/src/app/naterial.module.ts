// material.module.ts

import { NgModule } from '@angular/core';

import { MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
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
     MatSortModule
  ]
})
export class MaterialModule {}
