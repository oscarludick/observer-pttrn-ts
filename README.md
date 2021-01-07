# Observer Pattern

The following text was obtained from the book [Head First Desing Patterns](https://www.amazon.com/-/es/Eric-Freeman/dp/0596007124).


### Desing principles

* Strive for loosely coupled designs between objects that interact.

### The observer pattern and the power of loose coupling

The observer pattern consists of SUBJECTS and OBSERVERS. The subject and the observers are defined as one-to-many relationship. The observers are dependent of the subject such that when the subject's state changes, the observers get notified. Depending on the style of notification, the observer may be also be updated with new values.

Loose Coupling. When two objects are loosely coupled, they can interact, but have very little knowledge of each other.

Observer Pattern provides an object design where subjects and observers are loosely coupled because:

* The only thing the subject knows about an observer is that implements a certain interface (the observer interface). It doesn't need to know the concrete class of the observer, what it does, or anything else about it.
* Add new observers at any time.
* Never need to modify the subject to ad new types of observers.
* Reuse subjects or observers independetly of each other.
* Changes to either the subject or an observer will not affect the other.

Loosely coupled desings allow us to build flexible OO systems that can handle change because they minimize the interdependency between objects.

### In resume

The observer pattern defines a one-to-many dependency between objects so that when one object changes state, all of its dependents are notified and updated automatically.

### The RTS Game Example

The PlayerActions class extends from the Observable class, also know as the Subject class.

```ts
export class PlayerActions extends Observable<string> {
  private _currentAction: string;

  constructor() {
    super();
  }

  moveUnits(action: string): void {
    this._currentAction = action;
    this.setChanged();
    this.notifyObservers();
  }

  get action() {
    return this._currentAction;
  }
}
```

The Observable class will keep track of the observers and manage their registration and removal.

```ts
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
      this.observers.forEach(observer => observer.update(this, arg));
      this.changed = false;
    }
  }

  setChanged(): void {
    this.changed = true;
  }
}
```

The unit class extends from the Observer so our two objects become loosely coupled.

```ts
export class SoldierUnit extends Observer<string> implements Unit {
  constructor(observable: Observable<string>) {
    super(observable);
  }

  update(observable: Observable<string>, arg: string) {
    if (observable instanceof PlayerActions) {
      const action = arg === null ? (observable as PlayerActions).action : arg;
      this.move(action);
    }
  }

  move(action: string): void {
    console.log(`Moving Soldier Unit : ${action}`);
  }

  unselect(): void {
    this.remove();
  }
}
```

The result

```ts
const player = new PlayerActions();

const villager1: Unit = new VillagerUnit(player);
const villager2: Unit = new VillagerUnit(player);

const soldier1: Unit = new SoldierUnit(player);
const soldier2: Unit = new SoldierUnit(player);

player.moveUnits("2 steps East");

soldier1.unselect();
villager2.unselect();

player.moveUnits("2 steps South");
```


```bash
Moving Villager Unit : 2 steps East
Moving Villager Unit : 2 steps East
Moving Soldier Unit : 2 steps East
Moving Soldier Unit : 2 steps East

Moving Villager Unit : 2 steps South
Moving Soldier Unit : 2 steps South
```