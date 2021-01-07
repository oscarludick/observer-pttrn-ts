import { Observable } from "./observable";

export class PlayerActions extends Observable<string> {
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
