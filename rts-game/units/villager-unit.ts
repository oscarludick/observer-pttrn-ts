import { Observable } from "../observable";
import { IObserver } from "../observer";

import { PlayerActions } from "../player-actions";

type actionType = string;

export class VillagerUnits implements IObserver<actionType> {
  constructor(observable: Observable<actionType>) {
    observable.addObserver(this);
  }

  update(observable: Observable<actionType>, arg: actionType) {
    if (observable instanceof PlayerActions) {
      const action = arg === null ? (observable as PlayerActions).action : arg;
      this.move(action);
    }
  }

  move(action: string): void {
    console.log(`Moving Villager Units : ${action}`);
  }
}
