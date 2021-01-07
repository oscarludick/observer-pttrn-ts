import { Observer } from "./observer";

/**
 * Also known as Subject
 */
export abstract class Observable<T> {
  observers: Observer<T>[] = [];
  changed: boolean = false;

  addObserver(observer: Observer<T>): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer<T>): void {
    this.observers = this.observers.filter(mObserver => mObserver !== observer);
  }

  notifyObservers(arg: T = null): void {
    if (this.changed) {
      this.observers.forEach(observer => observer.update(this, arg));
      this.changed = false;
    }
  }

  setChanged(): void {
    this.changed = true;
  }
}
