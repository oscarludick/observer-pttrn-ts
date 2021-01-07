interface IObserver<T> {
  subject: IObservable<T>;
  update(observable: IObservable<T>): void;
}
