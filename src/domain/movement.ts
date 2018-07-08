
export const TURN_LEFT = "L";
export const TURN_RIGHT = "R";
export const GO_STRAIGHT = "M";
export const VALID_MOVEMENT_TYPES = [TURN_LEFT, TURN_RIGHT, GO_STRAIGHT];

export class Movement {

  private type: string;

  constructor(type: string){
    if(VALID_MOVEMENT_TYPES.indexOf(type.toUpperCase())===-1) throw new Error(`[Movement] Invalid type: ${type}`);
    this.type = type;
  }

  get() {
    return this.type;
  }

  static build(type: string): Movement {
    return new Movement(type);
  }

}