import { Effect } from './effect';
import { Target } from './target';

export class Action{
    
    constructor(
      public target: Target,
      public effect: Effect
      ){

    }
    public execute() {
      this.effect.execute(this.target.getTargets())
    }

  }
