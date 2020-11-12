import { PlayerService } from '../characters/player/player.service';
import { Character } from './character';

export class Target{
  targets: Character[] = [];
  constructor(public playerService: PlayerService){
  }
  public getTargets(player: Character):Character[] {
    return this.targets;
  }
}

export class FocusTarget implements Target{
  targets: Character[] = [];
  constructor(public playerService: PlayerService){
  }
  public getTargets(player: Character): Character[] {
    return [player.focus];
  }
}

export class SelfTarget implements Target{
  targets: Character[] = [];
  constructor(public playerService: PlayerService){
  }
  public getTargets(player: Character): Character[] {
    return [player];
  }
}

export class TeamTarget implements Target{
  targets: Character[] = [];
  constructor(public playerService: PlayerService){
  }
  public getTargets(player: Character): Character[] {
    throw new Error('Method not implemented.');
    //return playerService.playerTeam
  }
}
export class AlliesTarget implements Target{
  targets: Character[] = [];
  constructor(public playerService: PlayerService){
  }
  public getTargets(player: Character): Character[] {
    throw new Error('Method not implemented.');
  }
}
