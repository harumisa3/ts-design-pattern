import { Employee } from "./employee";

export interface Strategy {

  search(employeeList: Employee[], id: number): Employee;
}