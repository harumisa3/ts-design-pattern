import { Account } from "./account";
import { BankManager } from "./bankManager";
import { BankSystem } from "./bankSystem";

class Main {
  main() {
    // ==========================
    // 事前にアカウント情報を登録しておく
    // ==========================
    let yamada: Account = new Account(1, "0001", "普通", "山田太郎", 100000,1000000,1);
    let tanaka: Account = new Account(1, "0002", "普通", "田中角栄", 200000,0,0);
    BankSystem.accountMap["0001"] = yamada;
    BankSystem.accountMap["0002"] = tanaka;

    // ==========================
    // アカウント情報のセット
    // ==========================
    let yamadaAccount: string = "0001";
    let tanakaAccount: string = "0002";

    // ==========================
    // ローンを組んでみる
    // ==========================
    BankManager.takeLoan(yamadaAccount, 100000);
    BankManager.takeLoan(tanakaAccount, 100000);
  }
}

new Main().main();