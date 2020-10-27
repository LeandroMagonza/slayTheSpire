import { Action } from './action';

export class Card {
  id: number;
  name: string;
  cost: number;
  description: string;
  location: CardLocation;
  effect: Action[];
}
export enum CardLocation {
DECK = "inDeck",
DISCARD = "discarded",
HAND = "inHand",
LIBRARY = "inLibrary",
EXHAUSTED = "exhausted",
}

export class Skill extends Card{
}
export class Attack extends Card{
}
export class Power extends Card{
}


