import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserProfileComponent } from './user-profile.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: UserProfileComponent }]),
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [ UserProfileComponent ]
})

export class UserProfileModule {}
