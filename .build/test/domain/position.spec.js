"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const position_1 = require("../../src/domain/position");
describe("given Position as sut", () => {
    describe("when build is called with valid parameters", () => {
        it("then should build entity", (done) => {
            chai_1.expect(position_1.Position.build(0, 0, position_1.VALID_POSITION_ORIENTATIONS[0])).to.deep.eq({
                "orientation": "N",
                "posX": 0,
                "posY": 0
            });
            done();
        });
    });
    describe("when build is called with invalid orientation", () => {
        it("then should throw error", (done) => {
            chai_1.expect(() => position_1.Position.build(0, 0, "INVALID_POSITION")).to.throw();
            done();
        });
    });
    describe("when build is called with invalid posX", () => {
        it("then should throw error", (done) => {
            chai_1.expect(() => position_1.Position.build(-8, 0, position_1.VALID_POSITION_ORIENTATIONS[0])).to.throw();
            done();
        });
    });
    describe("when build is called with invalid posY", () => {
        it("then should throw error", (done) => {
            chai_1.expect(() => position_1.Position.build(0, 1.24, position_1.VALID_POSITION_ORIENTATIONS[0])).to.throw();
            done();
        });
    });
});
//# sourceMappingURL=position.spec.js.map