import { Effect } from './effect';
import { Target } from './target';

export class Action{

    constructor(
      public target: Target,
      public effect: Effect
      ){

    }
    public executeAction() {
      this.effect.executeEffect(this.target.getTargets())
    }

  }
