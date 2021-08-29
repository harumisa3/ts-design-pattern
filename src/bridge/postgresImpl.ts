import { DbImpl } from "./dbImpl";
import { Employee } from "./employee";

export class PostgresImpl extends DbImpl {
  connect(): void {
    console.log("Postgresに接続しました");
  }
  findAllEmployee(): Employee[] {
    let employeeList: Employee[] = [];
    // 従業員インスタンスを作成
    let yamada: Employee = new Employee("山田", 20);
    let tanaka: Employee = new Employee("田中", 28);

    // 従業員リストに追加
    employeeList.push(yamada);
    employeeList.push(tanaka);
  
    return employeeList;
  }
  close(): void {
    console.log("Postgresとの接続をクローズしました")
  }
  
}