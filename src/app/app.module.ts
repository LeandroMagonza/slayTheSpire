import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { HandComponent } from './hand/hand.component';
import { EnemiesComponent } from './enemies/enemies.component';
import { HeaderComponent } from './header/header.component';
import { HpBarComponent } from './player/hp-bar/hp-bar.component';
import { BuffsComponent } from './player/buffs/buffs.component';
import { DebuffsComponent } from './player/debuffs/debuffs.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    HandComponent,
    EnemiesComponent,
    HeaderComponent,
    HpBarComponent,
    BuffsComponent,
    DebuffsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
