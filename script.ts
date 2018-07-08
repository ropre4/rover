
import {Rover} from "./src/domain/rover";
import {Position} from "./src/domain/position";
import {Movement} from "./src/domain/movement";
import {MissionController} from "./src/missionController";

const rover1 = Rover.build(Position.build({x: 1, y: 2},"N"));
const movementsRover1 = "LMLMLMLMM".split('').map((el: string) => Movement.build(el));

const rover2 = Rover.build(Position.build({x: 3, y: 3},"E"));
const movementsRover2 = "MMRMMRMRRM".split('').map((el: string) => Movement.build(el));

const missionController = new MissionController(
  {x: 5, y: 5},
  [
    {movements: movementsRover1, rover: rover1},
    {movements: movementsRover2, rover: rover2}
  ]
);

missionController.run();
