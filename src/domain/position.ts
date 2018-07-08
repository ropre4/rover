
import {GO_STRAIGHT, Movement, TURN_LEFT, TURN_RIGHT} from "./movement";

export const VALID_POSITION_ORIENTATIONS = ["N", "E", "S", "W"];

export interface ICoordinates {
  x: number,
  y: number
}

export class Position {

  private coordinates: ICoordinates;
  private orientation: string;

  constructor(
    coordinates: ICoordinates,
    orientation: string
  ){
    if(coordinates.x<0 || !Number.isInteger(coordinates.x))
      throw new Error(`[Position] Invalid coordinate X: ${coordinates.x}`);
    if(coordinates.y<0 || !Number.isInteger(coordinates.y))
      throw new Error(`[Position] Invalid coordinate Y: ${coordinates.y}`);
    if(VALID_POSITION_ORIENTATIONS.indexOf(orientation)===-1)
      throw new Error(`[Position] Invalid orientation: ${orientation}`);

    this.coordinates = coordinates;
    this.orientation = orientation;
  }
  getCoordinates(): ICoordinates {
      return this.coordinates;
  }
  applyMovement(movement: Movement, limits: ICoordinates, blockedCoordinates: ICoordinates[]): Position {
      switch(movement.get()){
        case TURN_LEFT:
          return this.turnLeft().validate(limits, []);
          break;
        case TURN_RIGHT:
          return this.turnRight().validate(limits, []);
          break;
        case GO_STRAIGHT:
          return this.goStraight().validate(limits, blockedCoordinates);
      }
  }

  validate(limits: ICoordinates, blockedCoordinates: ICoordinates[]): Position {
      if(limits.x<this.coordinates.x) throw new Error(`[Position] Position exceeds limits: x=${this.coordinates.x}`);
      if(limits.y<this.coordinates.y) throw new Error(`[Position] Position exceeds limits: y=${this.coordinates.y}`);
      blockedCoordinates.map((coor: ICoordinates) => {
        if(coor.x===this.coordinates.x && coor.y===this.coordinates.y)
          throw new Error(`[Position] Position overlaps with a blocked Coordinate: x=${coor.x} y=${coor.y}`);
      });
      return this;
  }

  private turnLeft(): Position {
    const orientations = VALID_POSITION_ORIENTATIONS;
    return Position.build(this.coordinates, this.orientation === orientations[0] ?
      orientations[orientations.length-1] :
      orientations[orientations.indexOf(this.orientation)-1]
    );
  }
  private turnRight(): Position {
    const orientations = VALID_POSITION_ORIENTATIONS;
    return Position.build(this.coordinates, this.orientation === orientations[orientations.length-1] ?
      orientations[0] :
      orientations[orientations.indexOf(this.orientation)+1]
    );
  }
  private goStraight(): Position {
    const orientations = VALID_POSITION_ORIENTATIONS;
    switch(this.orientation) {
      case orientations[0]:
        return Position.build({x: this.coordinates.x, y: this.coordinates.y+1}, this.orientation);
        break;
      case orientations[1]:
        return Position.build({x: this.coordinates.x+1, y: this.coordinates.y}, this.orientation);
        break;
      case orientations[2]:
        return Position.build({x: this.coordinates.x, y: this.coordinates.y-1}, this.orientation);
        break;
      case orientations[3]:
        return Position.build({x: this.coordinates.x-1, y: this.coordinates.y}, this.orientation);
    }
  }

  static build(coordinates: ICoordinates, orientation: string): Position {
      return new Position(coordinates, orientation);
  }
}
