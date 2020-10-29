import { Action } from './action';

export class Card {

  constructor(
    public id: number,
    public name: string,
    public cost: number,
    public description: string,
    public actions: Action[]
    ){

  }
  executeCard(){
    for(let action of this.actions){
      action.executeAction();
    }
  }
}


export class Skill extends Card{
}
export class Attack extends Card{
}
export class Power extends Card{
}


