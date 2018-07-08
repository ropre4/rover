"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const purchase_1 = require("./purchase");
exports.greeting = 'Hello Spain, ';
exports.greetingDefault = 'Hello my friend!';
exports.greetingUppercase = exports.greeting.toUpperCase();
class User {
    constructor(name, purchase) {
        this.name = name;
        this.purchase = purchase ? purchase : new purchase_1.Purchase([]);
    }
    greet(name) {
        return Greeting.get(formatNames(name));
    }
    addToBag(item) {
        this.purchase.addToBag(item);
    }
    finish() {
        const total = this.purchase.calculateTotal();
        return `${this.name} spent ${total}`;
    }
}
exports.User = User;
class Greeting {
    constructor(name) {
        this.name = name;
        if (name === null) {
            this.greet = exports.greetingDefault;
            return;
        }
        if (isUpperCase(name)) {
            this.greet = exports.greetingUppercase + name;
            return;
        }
        this.greet = exports.greeting + name;
    }
    static get(name) {
        return new Greeting(name).greet;
    }
}
const isUpperCase = (str) => {
    return str === str.toUpperCase();
};
const formatNames = (name) => {
    if (Array.isArray(name)) {
        if (name.length > 2) {
            const names = name.join(", ");
            return names.substring(0, names.length - name[name.length - 1].length) + "and " + name[name.length - 1];
        }
        return name.join(" and ");
    }
    return name;
};
//# sourceMappingURL=user.js.map