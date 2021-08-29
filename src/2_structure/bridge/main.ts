import { CustomDisplay } from "./customDisplay";
import { Display } from "./display";
import { MySqlImpl } from "./mysqlImpl";
import { PostgresImpl } from "./postgresImpl";

class Main {
  main() {

    // 従業員一覧を表示その１
    let d1: Display = new Display(new MySqlImpl);
    d1.showEmployeeList();

    // 従業員一覧を表示その２
    let d2: Display = new CustomDisplay(new PostgresImpl);
    d2.showEmployeeList();

    // 25歳以下の従業員を表示
    let d3: CustomDisplay = new CustomDisplay(new MySqlImpl);
    d3.filterAge(27);
  }
}
new Main().main();