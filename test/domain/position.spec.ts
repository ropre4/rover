import {expect} from 'chai';
import {Position, VALID_POSITION_ORIENTATIONS} from "../../src/domain/position";
import {Movement} from "../../src/domain/movement";

describe("given Position as sut", () => {
  describe("when build is called with valid parameters", () => {
    it("then should build entity", (done) => {
      expect(Position.build({x: 0, y: 0}, VALID_POSITION_ORIENTATIONS[0])).to.deep.eq({
        "coordinates": {
          "x": 0,
          "y": 0
        },
        "orientation": "N"
      });
      done();
    })
  });
  describe("when build is called with invalid orientation", () => {
    it("then should throw error", (done) => {
      expect(()=>Position.build({x: 0, y: 0}, "INVALID_POSITION")).to.throw();
      done();
    })
  });
  describe("when build is called with invalid posX", () => {
    it("then should throw error", (done) => {
      expect(()=>Position.build({x: -8, y: 0}, VALID_POSITION_ORIENTATIONS[0])).to.throw();
      done();
    })
  });
  describe("when build is called with invalid posY", () => {
    it("then should throw error", (done) => {
      expect(()=>Position.build({x: 0, y: 1.24}, VALID_POSITION_ORIENTATIONS[0])).to.throw();
      done();
    })
  });
  describe("when applyMovement is called with valid conditions", () => {
    const values = [
      {
        initial: Position.build({x: 2, y: 2}, VALID_POSITION_ORIENTATIONS[0]),
        movement: Movement.build("L"),
        expected: Position.build({x: 2, y: 2}, VALID_POSITION_ORIENTATIONS[3])
      },
      {
        initial: Position.build({x: 2, y: 2}, VALID_POSITION_ORIENTATIONS[1]),
        movement: Movement.build("L"),
        expected: Position.build({x: 2, y: 2}, VALID_POSITION_ORIENTATIONS[0])
      },
      {
        initial: Position.build({x: 2, y: 2}, VALID_POSITION_ORIENTATIONS[0]),
        movement: Movement.build("R"),
        expected: Position.build({x: 2, y: 2}, VALID_POSITION_ORIENTATIONS[1])
      },
      {
        initial: Position.build({x: 2, y: 2}, VALID_POSITION_ORIENTATIONS[3]),
        movement: Movement.build("R"),
        expected: Position.build({x: 2, y: 2}, VALID_POSITION_ORIENTATIONS[0])
      },
      {
        initial: Position.build({x: 2, y: 2}, VALID_POSITION_ORIENTATIONS[0]),
        movement: Movement.build("M"),
        expected: Position.build({x: 2, y: 3}, VALID_POSITION_ORIENTATIONS[0])
      },
      {
        initial: Position.build({x: 2, y: 2}, VALID_POSITION_ORIENTATIONS[1]),
        movement: Movement.build("M"),
        expected: Position.build({x: 3, y: 2}, VALID_POSITION_ORIENTATIONS[1])
      },
      {
        initial: Position.build({x: 2, y: 2}, VALID_POSITION_ORIENTATIONS[2]),
        movement: Movement.build("M"),
        expected: Position.build({x: 2, y: 1}, VALID_POSITION_ORIENTATIONS[2])
      },
      {
        initial: Position.build({x: 2, y: 2}, VALID_POSITION_ORIENTATIONS[3]),
        movement: Movement.build("M"),
        expected: Position.build({x: 1, y: 2}, VALID_POSITION_ORIENTATIONS[3])
      }
    ];
    values.map(el=>{
      it("then should calculate new position properly", (done) => {
        expect(el.initial.applyMovement(el.movement, {x: 5, y: 5}, [])).to.be.deep.equal(el.expected);
        done();
      })
    });
    describe("when applyMovement is called with map limits that doesn't allow movement", () => {
      it("then should throw Error", (done) => {
        const sut = Position.build({x: 2, y: 2}, VALID_POSITION_ORIENTATIONS[0]);
        expect(()=>sut.applyMovement(Movement.build("M"), {x: 10, y: 2}, [])).to.throw();
        done();
      })
    });
    describe("when applyMovement is called with invalid conditions", () => {
      it("then should throw Error", (done) => {
        const sut = Position.build({x: 2, y: 2}, VALID_POSITION_ORIENTATIONS[0]);
        expect(()=>sut.applyMovement(Movement.build("M"), {x: 5, y: 5}, [{x:2, y:3}])).to.throw();
        done();
      })
    });
  });
});
