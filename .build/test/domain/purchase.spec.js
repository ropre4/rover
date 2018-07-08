"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const purchase_1 = require("../../src/domain/purchase");
describe("given purchase as sut", () => {
    const item1 = { price: 1 };
    const item2 = { price: 4 };
    const item3 = { price: 47 };
    const purchase = new purchase_1.Purchase([item1, item2, item3]);
    describe("when getTotal is called", () => {
        it("then should return reduced values", (done) => {
            chai_1.expect(purchase.calculateTotal()).to.eq(52);
            done();
        });
    });
});
//# sourceMappingURL=purchase.spec.js.map