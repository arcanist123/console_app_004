"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyClass = void 0;
var MyClass = /** @class */ (function () {
    function MyClass(name) {
        this.name = name;
    }
    MyClass.prototype.greet = function () {
        return "Greetings, " + this.name + "!";
    };
    return MyClass;
}());
exports.MyClass = MyClass;
