import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BestPlayersDecksComponent } from './best-players-decks.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: BestPlayersDecksComponent }]),
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [ BestPlayersDecksComponent ]
})

export class BestPlayersDecksModule {}
