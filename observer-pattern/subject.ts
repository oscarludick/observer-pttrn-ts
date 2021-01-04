export abstract class Subject<T> implements IObservable<T>, IState<T> {
  private state: T;

  observers: IObserver<T>[] = [];

  addObserver(observer: IObserver<T>): void {
    this.observers.push(observer);
  }

  removeObserver(observer: IObserver<T>): void {
    //remove observer from array
  }

  notify(): void {
    this.observers.forEach(observer => {
      observer.update();
    });
  }

  setState(state: T) {
    this.state = state;
    this.notify();
  }

  getState(): T {
    return this.state;
  }
}
