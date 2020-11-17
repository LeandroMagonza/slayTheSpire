import { Card } from './card';
import { shuffle,take, includes, merge } from 'lodash';
import { bash, strike } from '../libraries/libraryAttacks';
import { defend } from '../libraries/librarySkills';
import { Buff } from './buff';
import { PlayerService } from '../characters/player/player.service';
export class Character{

  deck:     Card[] = [];
  discard:  Card[] = [];
  hand:     Card[] = [];
  exhaust:  Card[] = [];
  buffs:    Buff[] = [];
  handRefill: number = 5;
  // maxHandSize:number;
  currentHp: number;
  currentEnergy:number;
  block: number;
  focus: Character;
  selectedCard: Card = null;
    constructor(
    public maxHP: number,
    public maxEnergy: number,
    public name: string,
    public playerService: PlayerService
    ){
      this.currentHp = maxHP;
      this.block = 0;
      this.deck.push(strike(playerService));
      this.deck.push(strike(playerService));
      this.deck.push(strike(playerService));
      this.deck.push(strike(playerService));
      this.deck.push(strike(playerService));
      this.deck.push(bash(playerService));
      this.deck.push(defend(playerService));
      this.deck.push(defend(playerService));
      this.deck.push(defend(playerService));
      this.deck.push(defend(playerService));
      this.deck = shuffle(this.deck);
  }

  reciveDamage(damage: number){
    if (this.block>damage) {
      this.block -= damage;
    }
    else{
      let remainingDamage = damage-this.block;
      this.block = 0;
      this.currentHp -= remainingDamage;
    }
  }
  addBlock(block: number){
    this.block += block;
  }

  discardHand(){
    this.discard.push(...this.hand);
    this.hand = [];
  }

  endTurn(){
    this.discardHand();
  }

  startTurn(){
    this.block = 0;
    this.drawCard(this.handRefill);
    this.selectedCard = this.hand[0];
    this.refillEnergy();
  }

  drawCard(amount){
    for (let index = 0; index < amount; index++) {
      if (this.deck.length == 0) {
        this.refillDeck();
      }
      this.hand.push(this.deck.pop());
    }
  }

  refillDeck(){
    this.deck.push(...shuffle(this.discard));
    this.discard = [];
  }

  shuffleDeck(){
    this.deck = shuffle(this.deck);
  }
  addBuff(){

  }
  addDebuff(){

  }

  setFocus(newFocus: Character){
    this.focus = newFocus;
  }

  refillEnergy(){
    this.currentEnergy = this.maxEnergy;
  }
  getCurrentDeckSize(){
    return this.deck.length;
  }
  getCurrentDiscardSize(){
    return this.discard.length;
  }

  playCard() {
    if (this.selectedCard.cost <= this.currentEnergy) {
      this.currentEnergy -= this.selectedCard.cost;
      this.selectedCard.executeCard(this);
      this.discard.push(this.selectedCard);
      this.hand.splice(this.hand.indexOf(this.selectedCard), 1);
      this.selectedCard = this.hand[0];
    }
  }
}




