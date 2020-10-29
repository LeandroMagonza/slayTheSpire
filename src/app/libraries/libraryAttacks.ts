
import { Action } from '../models/action';
import { Attack } from "../models/card";
import { DamageEffect } from "../models/effect";
import { FocusTarget } from "../models/target";

export const strike = (playerService) => new Attack(
  1,
  "estroik",
  1,
  "pega 6 guachin",
  [new Action(
    new FocusTarget(playerService),
    new DamageEffect(6)
  )
  ]
);
