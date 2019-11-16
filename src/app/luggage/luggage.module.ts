import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LuggagePageRoutingModule } from './luggage-routing.module';

import { LuggagePage } from './luggage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LuggagePageRoutingModule
  ],
  declarations: [LuggagePage]
})
export class LuggagePageModule {}
