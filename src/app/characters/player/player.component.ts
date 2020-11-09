import { Component, HostListener, OnInit } from '@angular/core';
import { PlayerService } from './player.service';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['../characters.component.css','./player.component.css']
})
export class PlayerComponent implements OnInit {

  constructor(public playerService: PlayerService) {
   }

  ngOnInit(): void {
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log(event);
    if (event.key == " ") {
      this.playerService.playCard();
    }
    if (event.key == "e") {
      this.playerService.endTurn();
    }
  }

}
