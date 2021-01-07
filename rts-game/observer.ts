import { Observable } from "./observable";

interface IObserver<T> {
  update(observable: Observable, arg: T): void;
}
