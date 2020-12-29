interface IState<T> {
  getState(): T;
  setState(state: T): void;
}
