"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const movement_1 = require("../../src/domain/movement");
describe("given Movement as sut", () => {
    describe("when build is called with valid type", () => {
        it("then should build entity", (done) => {
            chai_1.expect(movement_1.Movement.build(movement_1.VALID_MOVEMENT_TYPES[0]).get()).to.eq(movement_1.VALID_MOVEMENT_TYPES[0]);
            done();
        });
    });
    describe("when build is called with invalid type", () => {
        it("then should throw error", (done) => {
            chai_1.expect(() => movement_1.Movement.build("INVALID_TYPE")).to.throw();
            done();
        });
    });
});
//# sourceMappingURL=movement.spec.js.map