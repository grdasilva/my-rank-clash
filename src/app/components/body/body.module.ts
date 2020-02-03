import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BodyComponent } from './body.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: BodyComponent }]),
    HttpClientModule,
  ],
  declarations: [ BodyComponent ]
})

export class BodyModule {}
