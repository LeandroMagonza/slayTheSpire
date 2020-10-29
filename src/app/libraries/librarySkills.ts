
import { Action } from '../models/action';
import { Attack, Skill } from "../models/card";
import { BlockEffect, DamageEffect } from "../models/effect";
import { FocusTarget, SelfTarget } from "../models/target";

export const defend = (playerService) => new Skill(
  2,
  "difens",
  1,
  "bloquea 5 man, re piola",
  [new Action(
    new SelfTarget(playerService),
    new BlockEffect(5)
  )
  ]
);
