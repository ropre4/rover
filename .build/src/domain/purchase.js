"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Purchase {
    constructor(items) {
        this.items = items;
    }
    addItem(item) {
        this.items.push(item);
    }
    calculateTotal() {
        const reducer = (accumulator, currentItem) => accumulator + currentItem.price;
        return this.items.reduce(reducer, 0);
    }
}
exports.Purchase = Purchase;
//# sourceMappingURL=purchase.js.map