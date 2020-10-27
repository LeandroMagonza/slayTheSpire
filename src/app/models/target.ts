import { Character } from './character';

export class Target{
  targets: Character[] = [];
  public getTargets():Character[] {
    return this.targets;
  }
}

export class FocusTarget implements Target{
  targets: Character[] = [];
  public getTargets(): Character[] {
    // throw new Error('Method not implemented.');
    return this.targets;
    //return playerService.player.focus
  }
}

export class TeamTarget implements Target{
  targets: Character[] = [];
  public getTargets(): Character[] {
    throw new Error('Method not implemented.');
    //return playerService.playerTeam
  }
}
export class AlliesTarget implements Target{
  targets: Character[] = [];
  public getTargets(): Character[] {
    throw new Error('Method not implemented.');
  }
}
