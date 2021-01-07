import { Observable } from "../observable";

type action = string;

export class EmailNotification implements IObserver<action> {
  constructor(observable: Observable<action>) {
    observable.addObserver(this);
  }
}
