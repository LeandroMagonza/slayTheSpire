import { Effect } from './effect';
import { Character } from './character';
import { Action } from './action';


export class Buff {
  duration: number;
  originator: Character;
  description: string;
  action: Action;
}

export class onAttackReceivedBuff implements Buff {
  duration: number;
  originator: Character;
  description: string;
  action: Action;

}
