import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player/player.service';

@Component({
  selector: 'app-enemies',
  templateUrl: './enemies.component.html',
  styleUrls: ['./enemies.component.css']
})
export class EnemiesComponent implements OnInit {

  constructor(public playerService: PlayerService) { }

  ngOnInit(): void {
  }

}
