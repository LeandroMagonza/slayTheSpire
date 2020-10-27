export class Character{

  currentHp: number;
  currentEnergy:number;
  block: number;
  buffs: Buff[];
  debuff: Debuff[];
  focus: Character;

  constructor(
    public maxHP: number,
    public maxEnergy: number,
    public name: string
    ){
      this.currentHp = maxHP;
      this.currentEnergy = maxEnergy;
      this.block = 0;

  }

  reciveDamage(damage: number){
    this.currentHp -= damage;
  }
  addBlock(block: number){
    this.block += block;
  }
}

export class Buff{
}
export class Debuff{
}

