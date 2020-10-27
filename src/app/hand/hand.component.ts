import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player/player.service';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css']
})
export class HandComponent implements OnInit {

  constructor(public playerService: PlayerService) { }

  ngOnInit(): void {
  }

}
