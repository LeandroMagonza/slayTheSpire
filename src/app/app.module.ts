import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './characters/player/player.component';
import { HandComponent } from './hand/hand.component';
import { EnemiesComponent } from './characters/enemies/enemies.component';
import { HeaderComponent } from './header/header.component';
import { HpBarComponent } from './characters/player/hp-bar/hp-bar.component';
import { BuffsComponent } from './characters/player/buffs/buffs.component';
import { DebuffsComponent } from './characters/player/debuffs/debuffs.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CharactersComponent } from './characters/characters.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    HandComponent,
    EnemiesComponent,
    HeaderComponent,
    HpBarComponent,
    BuffsComponent,
    DebuffsComponent,
    CharactersComponent
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
