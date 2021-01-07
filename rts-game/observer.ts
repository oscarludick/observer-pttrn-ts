import { Observable } from "./observable";

export interface IObserver<T> {
  observable: Observable;
  update(observable: Observable, arg: T): void;
}
