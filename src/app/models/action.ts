import { Character } from './character';
import { Effect } from './effect';
import { Target } from './target';

export class Action{

    constructor(
      public target: Target,
      public effect: Effect
      ){

    }
    public executeAction(player: Character) {
      this.effect.executeEffect(this.target.getTargets(player))
    }

  }
