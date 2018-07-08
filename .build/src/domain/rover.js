"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rover {
    constructor(position) {
        this.position = position;
    }
    move(moveTo) {
        return Rover.build(moveTo);
    }
    getPosition() {
        return this.position;
    }
    static build(position) {
        return new Rover(position);
    }
}
exports.Rover = Rover;
//# sourceMappingURL=rover.js.map