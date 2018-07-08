"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const user_1 = require("../../src/domain/user");
describe("given user as sut", () => {
    const sut = new user_1.User('Arnau');
    describe("when constructor called", () => {
        it("then should build object", (done) => {
            const sut = new user_1.User("roman");
            chai_1.expect(sut).to.contain({ name: 'roman' });
            done();
        });
    });
    describe("when greet is called with a string", () => {
        it("then should return string", (done) => {
            chai_1.expect(sut.greet("Arnau")).to.equal(user_1.greeting + "Arnau");
            done();
        });
    });
    describe("when greet is called with a null", () => {
        it("then should return a string", (done) => {
            chai_1.expect(sut.greet(null)).to.equal(user_1.greetingDefault);
            done();
        });
    });
    describe("when greet is called with caps", () => {
        it("then should return a uppercase string", (done) => {
            const NAME_UPPERCASE = "JERRY";
            chai_1.expect(sut.greet(NAME_UPPERCASE)).to.equal(user_1.greetingUppercase + NAME_UPPERCASE);
            done();
        });
    });
    describe("when greet is called with array of names", () => {
        it("then should return both names", (done) => {
            const ARRAY_NAMES = ['Roman', 'Arnau'];
            chai_1.expect(sut.greet(ARRAY_NAMES)).to.contains(ARRAY_NAMES[0]).contains(ARRAY_NAMES[1]);
            done();
        });
    });
    describe("when greet is called with array of names of 3", () => {
        it("then should contain oxford comma", (done) => {
            const ARRAY_NAMES = ['Roman', 'Arnau', 'Oscar', 'Joaquín', 'Carlos'];
            chai_1.expect(sut.greet(ARRAY_NAMES)).to.contains(', and');
            done();
        });
    });
});
//# sourceMappingURL=user.spec.js.map