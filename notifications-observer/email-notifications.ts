import { Subject } from "../observer-pattern/subject";

export class EmailNotification implements IObserver<string> {
  subject: Subject<string>;

  constructor(observable: Subject<string>) {
    this.subject = observable;
    this.subject.addObserver(this);
  }

  update(): void {
    console.log("Email notificated with state: " + this.subject.getState());
  }
}
