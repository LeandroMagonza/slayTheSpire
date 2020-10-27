import { Injectable } from '@angular/core';
import { Action } from '../models/action';
import { Card } from '../models/card';
import { Character } from '../models/character';
import { DamageEffect, Effect } from '../models/effect';
import { FocusTarget } from '../models/target';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  player: Character;
  playerTeam: Character[];
  enemyTeam:  Character[];
  constructor() {
    const leandro = new Character(100,3,"Leandro");
    const lucas = new Character(100,3,"Lucas");
    const manu = new Character(12,0,"Manu");
    this.playerTeam = [leandro,lucas];
    this.enemyTeam = [manu];
    this.player = leandro;
    leandro.hand.push(new Card(
      1,
      "estroik",
      1,
      "pega 5 guachoo",
      [new Action(
        new FocusTarget(),
        new DamageEffect(5)
        )
      ]
      ))
  }
}
