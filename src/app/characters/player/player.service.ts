import { Injectable } from '@angular/core';
import { strike } from 'src/app/libraries/libraryAttacks';
import { defend } from 'src/app/libraries/librarySkills';
import { Card } from '../../models/card';
import { Character } from '../../models/character';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  turnNumber: number = 0;
  player: Character;
  allies: Character[];
  enemyTeam: Character[];
  characters: Character[];
  selectedCard: Card = null;
  constructor() {
    const leandro = new Character(100, 3, "Leandro",this);
    const lucas = new Character(100, 3, "Lucas",this);
    const JawWorm = new Character(12, 1, "Jaw Worm",this);
    this.allies = [lucas];
    this.enemyTeam = [JawWorm];
    this.player = leandro;
    this.player.focus = leandro;
    this.selectedCard = leandro.hand[0];
    this.characters = [this.player];
    this.characters = this.characters.concat(this.allies);
    this.characters = this.characters.concat(this.enemyTeam);

  }
  selectTarget(target) {
    // console.log(target);
    this.player.focus = target;
  }
  selectCard(card) {
    console.log(card);
    this.selectedCard = card;
  }
  playCard() {
    if (this.selectedCard.cost <= this.player.currentEnergy) {

      this.player.currentEnergy -= this.selectedCard.cost;
      this.selectedCard.executeCard();
      this.player.discard.push(this.selectedCard);
      this.player.hand.splice(this.player.hand.indexOf(this.selectedCard), 1);
      this.selectedCard = this.player.hand[0];
    }
  }
}

