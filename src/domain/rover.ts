
import {Position} from "./position";

export class Rover {

  constructor(private position: Position){}

  move(moveTo: Position): Rover {
    return Rover.build(moveTo);
  }

  getPosition(): Position {
    return this.position;
  }

  static build(position: Position): Rover {
    return new Rover(position);
  }

}