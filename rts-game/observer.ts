import { Observable } from "./observable";

export interface IObserver<T> {
  observable: Observable<T>;
  update(observable: Observable<T>, arg: T): void;
}
