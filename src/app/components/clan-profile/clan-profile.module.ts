import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClanProfileComponent } from './clan-profile.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ClanProfileComponent }]),
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [ ClanProfileComponent ]
})

export class ClanProfileModule {}
