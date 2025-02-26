import { MyClass3 } from "../test2/MyClass3";

export class MyClass2 {
  private name: String;
  constructor(name: string) {
    this.name = name;
  }

  greet() {
    let aaa = new MyClass3("asd");
    return "Greetings, " + this.name + "!";
  }
}
