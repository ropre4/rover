
import {ICoordinates} from "./domain/position";
import {Rover} from "./domain/rover";
import {Movement} from "./domain/movement";

export class MissionController {

  constructor(
    private limits: ICoordinates,
    private rovers: {movements: Movement[], rover: Rover}[]
  ){}

  run(){
    try{
      this.rovers.map((rover: {movements: Movement[], rover: Rover}, index: number)=>{
        rover.movements.map((movement: Movement)=>{
          const blockedCoordinates = this.getBlockedCoordinates(this.rovers.map((r)=>r.rover));
          rover.rover = rover.rover.move(rover.rover.getPosition().applyMovement(movement, this.limits, blockedCoordinates));
          console.log(`Rover ${index} moved to Position: ${JSON.stringify(rover.rover.getPosition())}`)
        });
      });
      console.log("Mission finished successfully.")
    }catch(ex){
      console.log("[MissionController] Mission Failed:");
      console.log(ex);
    }

  }

  getBlockedCoordinates(rovers: Rover[]): ICoordinates[] {
    return rovers.map((rover: Rover)=>{
      return rover.getPosition().getCoordinates();
    });
  }

}
