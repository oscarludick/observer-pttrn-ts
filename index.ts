import { PlayerActions } from "./rts-game/player-actions";
import { SoldierUnit } from "./rts-game/units/soldier-unit";
import { VillagerUnit } from "./rts-game/units/villager-unit";

const player = new PlayerActions();

const villager1 = new VillagerUnit(player);
const villager2 = new VillagerUnit(player);

const soldier1 = new SoldierUnit(player);
const soldier2 = new SoldierUnit(player);

player.moveUnits("2 steps North");
player.moveUnits("3 steps East");

soldier1.unselect();
villager2.unselect();
console.log("");

player.moveUnits("2 steps South");
