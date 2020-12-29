import { Subject } from "../observer-pattern/subject";

export class SMSNotification implements IObserver<string> {
  subject: Subject<string>;

  constructor(observable: Subject<string>) {
    this.subject = observable;
    this.subject.addObserver(this);
  }

  update(): void {
    console.log("SMS notificated with state: " + this.subject.getState());
  }
}
