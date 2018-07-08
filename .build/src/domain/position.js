"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VALID_POSITION_ORIENTATIONS = ["N", "S", "W", "E"];
class Position {
    constructor(posX, posY, orientation) {
        if (posX < 0 || !Number.isInteger(posX))
            throw new Error(`[Position] Invalid posX: ${posX}`);
        if (posY < 0 || !Number.isInteger(posY))
            throw new Error(`[Position] Invalid posY: ${posY}`);
        if (exports.VALID_POSITION_ORIENTATIONS.indexOf(orientation) === -1)
            throw new Error(`[Position] Invalid orientation: ${orientation}`);
        this.posX = posX;
        this.posY = posY;
        this.orientation = orientation;
    }
    static build(posX, posY, orientation) {
        return new Position(posX, posY, orientation);
    }
}
exports.Position = Position;
class ValidPosition extends Position {
}
exports.ValidPosition = ValidPosition;
//# sourceMappingURL=position.js.map