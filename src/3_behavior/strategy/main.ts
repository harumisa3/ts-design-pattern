import { Employee } from "./employee";
import { BinaryStrategy } from "./binaryStrategy";
import { SearchApi } from "./searchApi";
import { SequencialStrategy } from "./sequencialStrategy";

class Main {
  main() {
    // 線形探索のAPI
    let sequencialApi: SearchApi = new SearchApi(new SequencialStrategy());

    // 二分探索のAPI
    let binaryApi: SearchApi = new SearchApi(new BinaryStrategy());

    // 1〜10000までの乱数を生成
    let random = Math.floor( Math.random() * 10000 );

    console.log("乱数："+random);

    // 従業員リストを作成
    let employeeList: Employee[] = [];
    for (let i=0; i < 10000; i++) {
      let employee: Employee = new Employee(i,"user"+i);
      employeeList.push(employee);
    }

    // 線形探索で検索
    let employee1: Employee = sequencialApi.searchEmployee(random);
    console.log(employee1);

    // 二分探索で検索
    let employee2: Employee = binaryApi.searchEmployee(random);
    console.log(employee2)
  }
}

new Main().main();