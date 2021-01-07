import { Subject } from "../observer-pattern/observable-subject/subject";

export class PlayerActions extends Subject<string> {
  private _currentAction: string;

  moveUnits(action: string): void {
    this._currentAction = action;
    this.setChanged();
    this.notifyObservers();
  }

  get action() {
    return this._currentAction;
  }
}
