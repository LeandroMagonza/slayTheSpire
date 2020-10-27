import { Effect } from './effect';
import { Target } from './target';

export class Action{
    target: Target;
    effect: Effect;
    public execute() {
      this.effect.execute(this.target.getTargets())
    }
  }
