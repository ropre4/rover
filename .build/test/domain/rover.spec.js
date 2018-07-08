"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const rover_1 = require("../../src/domain/rover");
const position_1 = require("../../src/domain/position");
const initialPosition = position_1.Position.build(0, 0, position_1.VALID_POSITION_ORIENTATIONS[0]);
describe("given Rover as sut", () => {
    describe("when build is called with valid Position", () => {
        it("then should build entity", (done) => {
            chai_1.expect(rover_1.Rover.build(initialPosition)).to.deep.eq({ position: initialPosition });
            done();
        });
    });
    const sut = rover_1.Rover.build(initialPosition);
    describe("when build is called with valid Position", () => {
        it("then should build entity", (done) => {
            chai_1.expect(sut).to.deep.eq({ position: initialPosition });
            done();
        });
    });
    describe("when getPosition is called", () => {
        it("then should build entity", (done) => {
            chai_1.expect(sut).to.deep.eq({ position: initialPosition });
            done();
        });
    });
});
//# sourceMappingURL=rover.spec.js.map