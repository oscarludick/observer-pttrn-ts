import { Observable } from "./observable";

export interface IObserver<T> {
  update(observable: Observable, arg: T): void;
}
