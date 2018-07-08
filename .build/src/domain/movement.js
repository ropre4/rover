"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VALID_MOVEMENT_TYPES = ["L", "R", "M"];
class Movement {
    constructor(type) {
        if (exports.VALID_MOVEMENT_TYPES.indexOf(type.toUpperCase()) === -1)
            throw new Error(`[Movement] Invalid type: ${type}`);
        this.type = type;
    }
    get() {
        return this.type;
    }
    static build(type) {
        return new Movement(type);
    }
}
exports.Movement = Movement;
//# sourceMappingURL=movement.js.map