interface IObservable<T> {
  observers: Array<IObserver<T>>;

  addObserver(observer: IObserver<T>): void;

  removeObserver(observer: IObserver<T>): void;

  notify(): void;
}
