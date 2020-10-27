import { Injectable } from '@angular/core';
import { Character } from '../models/character';

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
  }
}
