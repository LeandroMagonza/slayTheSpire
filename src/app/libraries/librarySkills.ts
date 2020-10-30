
import { Action } from '../models/action';
import { Attack, Skill } from "../models/card";
import { BlockEffect, DamageEffect } from "../models/effect";
import { FocusTarget, SelfTarget } from "../models/target";

export const defend = (playerService) => new Skill(
  2,
  "Defend",
  1,
  "Gain 5 block.",
  [new Action(
    new SelfTarget(playerService),
    new BlockEffect(5)
  )
  ]
);
