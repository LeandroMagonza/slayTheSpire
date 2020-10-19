import { Character } from './character';

export class Card {
  id: number;
  name: string;
  cost: number;
  description: string;
  location: CardLocation;
  effect: Effect[];
}
export enum CardLocation {
DECK = "enMazo",
DISCARD = "enDescarte",
HAND = "enMano",
LIBRARY = "enBiblioteca",
EXHAUSTED = "enBiblioteca",
}

export class Skill extends Card{
}
export class Attack extends Card{
}
export class Power extends Card{
}

export class Effect{
  public execute(target: Character[]) {
  }
}

export class DamageEffect implements Effect{
  constructor(public damage: number){}
  public execute(targets: Character[]) {
    targets.forEach(target=> target.reciveDamage(this.damage));
  }
}
export class BlockEffect implements Effect{
  constructor(public block: number){}
  public execute(targets: Character[]) {
    targets.forEach(target=> target.addBlock(this.block));
  }
}
