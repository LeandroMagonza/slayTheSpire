import { Action } from './action';
import { Character } from './character';

export class Card {

  constructor(
    public id: number,
    public name: string,
    public cost: number,
    public description: string,
    public actions: Action[]
    ){

  }
  executeCard(player: Character){
    for(let action of this.actions){
      action.executeAction(player);
    }
  }
}


export class Skill extends Card{
}
export class Attack extends Card{
}
export class Power extends Card{
}


