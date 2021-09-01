import { Employee } from "./employee";
import { Strategy } from "./strategy";

export class SearchApi {

  // 戦略
  private strategy: Strategy;

  // 従業員のリスト
  private static employeeList: Employee[] = [];

  // コンストラクタ
  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  // 指定されたIDで従業員を探索するメソッド
  searchEmployee(id: number): Employee {

    let employee: Employee = this.strategy.search(SearchApi.employeeList, id);
    return employee;
  }

}