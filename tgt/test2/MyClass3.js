"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyClass3 = void 0;
var MyClass3 = /** @class */ (function () {
    function MyClass3(name) {
        this.name = name;
    }
    MyClass3.prototype.greet = function () {
        return "Greetings, " + this.name + "!";
    };
    return MyClass3;
}());
exports.MyClass3 = MyClass3;
