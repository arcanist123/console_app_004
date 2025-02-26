export class MyClass {
  private name: String;
  constructor(name: string) {
    this.name = name;
  }

  greet() {
    return "Greetings, " + this.name + "!";
  }
}
