export abstract class Subject<T> implements IObservable<T>, IState<T> {
  private state: T;

  observers: IObserver<T>[] = [];

  addObserver(observer: IObserver<T>): void {
    this.observers.push(observer);
  }

  notify(): void {
    this.observers.forEach(observer => {
      observer.update();
    });
  }

  getState(): T {
    return this.state;
  }

  setState(state: T) {
    this.state = state;
    this.notify();
  }
}
