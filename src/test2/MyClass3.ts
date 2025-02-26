export class MyClass3 {
  private name: String;
  constructor(name: string) {
    this.name = name;
  }

  greet() {
    return "Greetings, " + this.name + "!";
  }
}
