import { Employee } from "./employee";

export abstract class DbImpl {
  abstract connect(): void;
  abstract findAllEmployee(): Employee[];
  abstract close(): void;
}