import { Injectable } from '@angular/core';
import { strike } from 'src/app/libraries/libraryAttacks';
import { defend } from 'src/app/libraries/librarySkills';
import { Enemy } from 'src/app/models/Enemy';
import { Character } from '../../models/character';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  turnNumber: number = 0;
  player: Character;
  allies: Character[];
  playerTeam: Character[];
  enemyTeam: Character[];
  characters: Character[];
  constructor() {
    const leandro = new Character(100, 3, "Leandro",this);
    const lucas = new Character(100, 3, "Lucas",this);
    const JawWorm = new Enemy(12, 1, "Jaw Worm",this);
    this.allies = [lucas];
    this.enemyTeam = [JawWorm];
    this.player = leandro;
    this.player.focus = leandro;
    this.player.selectedCard = leandro.hand[0];
    this.characters = [this.player];
    this.characters = this.characters.concat(this.allies);
    this.playerTeam = [this.player];
    this.playerTeam = this.characters.concat(this.allies);
    this.characters = this.characters.concat(this.enemyTeam);
    this.startTurn();

  }
  setPlayerFocus(target) {
    // console.log(target);
    this.player.setFocus(target);
  }
  selectCard(card) {
    console.log(card);
    this.player.selectedCard = card;
  }
  playCard() {
    this.player.playCard();
  }

  endTurn(){
    this.characters.forEach(character => character.endTurn());
    this.startTurn();

  }

  startTurn(){
    this.characters.forEach(character => character.startTurn());
    this.turnNumber++;
  }
}

