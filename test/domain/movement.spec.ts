import {expect} from 'chai';
import {Movement, VALID_MOVEMENT_TYPES} from "../../src/domain/movement";

describe("given Movement as sut", () => {
  describe("when build is called with valid type", () => {
    it("then should build entity", (done) => {
      expect(Movement.build(VALID_MOVEMENT_TYPES[0]).get()).to.eq(VALID_MOVEMENT_TYPES[0]);
      done();
    })
  });
  describe("when build is called with invalid type", () => {
    it("then should throw error", (done) => {
      expect(()=>Movement.build("INVALID_TYPE")).to.throw();
      done();
    })
  });
});
