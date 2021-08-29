import { DbImpl } from "./dbImpl";
import { Employee } from "./employee";

export class Display {
  impl: DbImpl;
  constructor(impl: DbImpl) {
    this.impl = impl;
  }

  getEmployeeList(): Employee[] {
    this.impl.connect();
    let employeeList: Employee[] = this.impl.findAllEmployee();
    this.impl.close();
    return employeeList;
  }

  showEmployeeList(): void{
    let employeeList: Employee[] = this.getEmployeeList();

    // 従業員を順番に表示
    for(let i in employeeList) {
      console.log(employeeList[i]);
    }
  }
}