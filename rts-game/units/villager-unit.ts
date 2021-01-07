import { Observable } from "../observable";
import { Observer } from "../observer";

import { PlayerActions } from "../player-actions";
import { Unit } from "./a-unit";

export class VillagerUnit extends Observer<string> implements Unit {
  constructor(observable: Observable<string>) {
    super(observable);
  }

  update(observable: Observable<string>, arg: string) {
    if (observable instanceof PlayerActions) {
      const action = arg === null ? (observable as PlayerActions).action : arg;
      this.move(action);
    }
  }

  move(action: string): void {
    console.log(`Moving Villager Unit : ${action}`);
  }

  unselect(): void {
    this.remove();
  }
}
