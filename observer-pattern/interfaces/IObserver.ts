interface IObserver<T> {
  subject: IObservable<T>;
  update(): void;
}
