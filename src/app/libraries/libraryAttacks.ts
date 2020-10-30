
import { Action } from '../models/action';
import { Attack } from "../models/card";
import { DamageEffect } from "../models/effect";
import { FocusTarget } from "../models/target";

export const strike = (playerService) => new Attack(
  1,
  "Strike",
  1,
  "Deal 6 damage.",
  [new Action(
    new FocusTarget(playerService),
    new DamageEffect(6)
  )
  ]
);

export const bash = (playerService) => new Attack(
  3,
  "Bash",
  1,
  "Deal 8 damage. Apply 2 Vulnerable.",
  [
    new Action(
    new FocusTarget(playerService),
    new DamageEffect(8)
    ),
    new Action(
      new FocusTarget(playerService),
      new DamageEffect(8)
    )
  ]
);
export const chomp = (playerService) => new Attack(
  4,
  "Chomp",
  1,
  "Deal 11 damage.",
  [new Action(
    new FocusTarget(playerService),
    new DamageEffect(11)
  )
  ]
);
