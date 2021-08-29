
export class Employee {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  toString() {
    return "Employee [name=" + this.name + ",age=" + String(this.age);
  }
}