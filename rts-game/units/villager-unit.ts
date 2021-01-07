import { Observable } from "../observable";
import { IObserver } from "../observer";

import { PlayerActions } from "../player-actions";

export class VillagerUnit implements IObserver<string> {
  observable: Observable<string>;

  constructor(observable: Observable<string>) {
    this.observable = observable;
    this.observable.addObserver(this);
  }

  update(observable: Observable<string>, arg: string) {
    if (observable instanceof PlayerActions) {
      const action = arg === null ? (observable as PlayerActions).action : arg;
      this.move(action);
    }
  }

  unselect(): void {
    this.observable.removeObserver(this);
  }

  move(action: string): void {
    console.log(`Moving Villager Unit : ${action}`);
  }
}
