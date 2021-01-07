/**
 * Also known as Subject
 */
export abstract class Observable<T> {
  observers: IObserver<T>[] = [];
  changed: boolean = false;

  addObserver(observer: IObserver<T>): void {
    this.observers.push(observer);
  }

  removeObserver(observer: IObserver<T>): void {
    this.observers = this.observers.filter(mObserver => mObserver !== observer);
  }

  notifyObservers(arg: T = null): void {
    if (this.changed) {
      this.observers.forEach(observer => observer.update(this));
      this.changed = false;
    }
  }

  setChanged(): void {
    this.changed = true;
  }
}
