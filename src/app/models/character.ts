import { Card } from './card';
import { shuffle,take, includes, merge } from 'lodash';
import { bash, strike } from '../libraries/libraryAttacks';
import { defend } from '../libraries/librarySkills';
export class Character{

  deck:     Card[] = [];
  discard:  Card[] = [];
  hand:     Card[] = [];
  exhaust:  Card[] = [];
  buffs:    Buff[] = [];
  debuff: Debuff[] = [];
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
    playerService
    ){
      this.currentHp = maxHP;
      this.currentEnergy = maxEnergy;
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

      this.drawCard(5);
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
    this.drawCard(this.handRefill);
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
}

export class Status{
  description: string;
  // effect
}
export class Buff implements Status{
  description: string;
}
export class Debuff implements Status{
  description: string;
}

