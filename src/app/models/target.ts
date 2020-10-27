import { Character } from './character';

export class Target{
  targets:Character[] = [];
  public getTargets():Character[] {
    return this.targets;
  }
}

export class focusTarget implements Target{
  targets: Character[];
  public getTargets(): Character[] {
    throw new Error('Method not implemented.');
    //return playerService.player.focus
  }
}

export class teamTarget implements Target{
  targets: Character[];
  public getTargets(): Character[] {
    throw new Error('Method not implemented.');
    //return playerService.playerTeam
  }
}
export class alliesTarget implements Target{
  targets: Character[];
  public getTargets(): Character[] {
    throw new Error('Method not implemented.');
  }
}
