import { Subject } from "../observer-pattern/observable-subject/subject";

export class PlayerActions extends Subject<string> {
  moveUnits(action: string): void {}
}
