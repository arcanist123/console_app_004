"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MyClass2 = void 0;
var MyClass3_1 = $.import("D:\\doc\\projects\\ts\\console_apps\\console_app_004\\tgt\\test2\\MyClass3");
var MyClass2 = /** @class */function () {
  function MyClass2(name) {
    this.name = name;
  }
  MyClass2.prototype.greet = function () {
    var aaa = new MyClass3_1.MyClass3("asd");
    return "Greetings, " + this.name + "!";
  };
  return MyClass2;
}();
exports.MyClass2 = MyClass2;