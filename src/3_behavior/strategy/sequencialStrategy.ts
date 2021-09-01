import { Employee } from "./employee";
import { Strategy } from "./strategy";

export class SequencialStrategy implements Strategy{

  search(employeeList: Employee[], id: number): Employee {
    // !をつけることで初期化チェックを無視する
    let result!: Employee;

    let startTime = performance.now();

    for(let employee of employeeList) {
      if(employee.id === id) {
        result = employee;
        break;
      }
    }

    let endTime = performance.now();
    console.log("線形探索の処理時間：" + (endTime -startTime) + "ナノ秒");
  
    return result;
  }
}