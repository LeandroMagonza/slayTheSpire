import { Character } from './character';

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
