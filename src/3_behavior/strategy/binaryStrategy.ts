import { Employee } from "./employee";
import { Strategy } from "./strategy";

export class BinaryStrategy implements Strategy{

  search(employeeList: Employee[], id: number): Employee {

    let result!: Employee;

    let left: number = 1;
    let right: number = employeeList.length;
    let count: number = 0;
    let startTime = performance.now();

    while(left < right) {
      count++;
      
      // 中央値を計算
      let median: number = left + (right - left)/2;

      // 中央値のIDと等しいかどうか
      if (median === id) {

        // 中央値が目的の値の場合、探索終了
        result = employeeList[median];
        break;
      } else if(id < median) {
        // 中央値よりもIDが小さかった場合
        right = median;
      } else if(median < id) {
        // 中央値よりもIDが大きかった場合
        left = median + 1;
      }
    }
    let endTime = performance.now();

    console.log("二分探索の処理時間：" + (endTime - startTime) + "ナノ時間");
    console.log("探索回数：" + count + "回");
    return result;
  }
}