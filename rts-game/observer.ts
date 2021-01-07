import { Observable } from "./observable";

export abstract class Observer<T> {
  private _observable: Observable<T>;

  constructor(observable: Observable<T>) {
    this._observable = observable;
    this._observable.addObserver(this);
  }

  abstract update(observable: Observable<T>, arg: T): void;

  protected remove(): void {
    this._observable.removeObserver(this);
  }
}
