import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnemiesService {
  enemies: any[] = [
    {
      name: "Elver",
      maxHp: 100,
      currentHp: 99,
    },
    {
      name: "Galarga",
      maxHp: 50,
      currentHp: 27,
    }
  ];
  constructor() { }
}
