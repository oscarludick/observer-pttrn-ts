import { PlayerActions } from "./rts-game/player-actions";

import { Unit } from "./rts-game/units/a-unit";
import { SoldierUnit } from "./rts-game/units/soldier-unit";
import { VillagerUnit } from "./rts-game/units/villager-unit";

const player = new PlayerActions();

const villager1: Unit = new VillagerUnit(player);
const villager2: Unit = new VillagerUnit(player);

const soldier1: Unit = new SoldierUnit(player);
const soldier2: Unit = new SoldierUnit(player);

player.moveUnits("2 steps North");

soldier1.unselect();
villager2.unselect();

player.moveUnits("2 steps South");
