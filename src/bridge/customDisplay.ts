import { DbImpl } from "./dbImpl";
import { Display } from "./display";
import { Employee } from "./employee";

export class CustomDisplay extends Display {
  // コンストラクタ
  constructor(impl: DbImpl) {
    super(impl);
  }

  filterAge(age: number): void {
    let employeeList: Employee[] = this.getEmployeeList();

    for(let i in employeeList) {
      if (employeeList[i].age <= age) {
        console.log(employeeList[i]);
      }
    }
  }
}