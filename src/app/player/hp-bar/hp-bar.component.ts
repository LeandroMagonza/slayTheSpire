import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-hp-bar',
  templateUrl: './hp-bar.component.html',
  styleUrls: ['./hp-bar.component.css']
})
export class HpBarComponent implements OnInit {

  constructor(public playerService: PlayerService){ }

  ngOnInit(): void {
  }

}
