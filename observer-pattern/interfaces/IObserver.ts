interface IObserver<T> {
  subject: Subject<T>;
  update(): void;
}
