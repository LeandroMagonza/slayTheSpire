import { Character } from './character';

export class Effect{
  public executeEffect(target: Character[]) {
  }
}

export class DamageEffect implements Effect{
  constructor(public damage: number){}
  public executeEffect(targets: Character[]) {
    targets.forEach(target=> target.reciveDamage(this.damage));
  }
}
export class BlockEffect implements Effect{
  constructor(public block: number){}
  public executeEffect(targets: Character[]) {
    targets.forEach(target=> target.addBlock(this.block));
  }
}
export class DebuffEffect implements Effect{
  constructor(public block: number){}
  public executeEffect(targets: Character[]) {
    targets.forEach(target=> target.addBlock(this.block));
  }
}
