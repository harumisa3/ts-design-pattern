
import { ApprovalPerson } from "./approvalPerson";
import { DecisionRequest } from "./desisionRequest";
import { GeneralAffairs } from "./generalAffairs";
import { GeneralManager } from "./generalManager";
import { Manager } from "./manager";
import { President } from "./president";

class Main {
  main() {
    // ===========================
    // 担当者の作成
    // ===========================
    // 庶務
    let ishihara: ApprovalPerson = new GeneralAffairs("石原");
    // 課長
    let noguchi: ApprovalPerson = new Manager("野口", 10);
    // 部長
    let yamada: ApprovalPerson = new GeneralManager("山田", 20);
    // 社長
    let sato: ApprovalPerson = new President("佐藤", 30);
  
    // 連鎖の形成
    ishihara.setNext(noguchi).setNext(yamada).setNext(sato);
    // ===========================
    // 稟議書の作成
    // ===========================
    let holiday: DecisionRequest = new DecisionRequest("有給申請書", 1);
    let retire: DecisionRequest = new DecisionRequest("退職届", 11);
    let hiring: DecisionRequest = new DecisionRequest("新卒採用申請書", 21);
    let strike: DecisionRequest = new DecisionRequest("ストライキ通知書", 99);
    // ===========================
    // 稟議書の申請
    // ===========================
    ishihara.decision(holiday);
    ishihara.decision(retire);
    ishihara.decision(hiring);
    ishihara.decision(strike);
  }
}

const main = new Main();
main.main();