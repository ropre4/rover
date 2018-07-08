import {expect} from 'chai';
import {Rover} from "../../src/domain/rover";
import {Position, VALID_POSITION_ORIENTATIONS} from "../../src/domain/position";

const initialPosition: Position = Position.build( {x:0, y: 0}, VALID_POSITION_ORIENTATIONS[0]);

describe("given Rover as sut", () => {
  describe("when build is called with valid Position", () => {
    it("then should build entity", (done) => {
      expect(Rover.build(initialPosition)).to.deep.eq({position: initialPosition});
      done();
    })
  });
  const sut = Rover.build(initialPosition);
  describe("when build is called with valid Position", () => {
    it("then should build entity", (done) => {
      expect(sut).to.deep.eq({position: initialPosition});
      done();
    })
  });
  describe("when getPosition is called", () => {
    it("then should return position", (done) => {
      expect(sut.getPosition()).to.deep.eq(initialPosition);
      done();
    })
  });
});
