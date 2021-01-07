interface IObservable<T> {
  observers: IObserver<T>[];
  changed: boolean;

  addObserver(observer: IObserver<T>): void;

  removeObserver(observer: IObserver<T>): void;

  notifyObservers(): void;

  setChanged(): void;
}
