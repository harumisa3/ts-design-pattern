export class DecisionRequest {

  // 稟議書名
  private _documentName: string;

  // 稟議書のタイプ
  private _documentType: number;

  // コンストラクタ
  constructor(documentName: string, documentType: number) {
    this._documentName = documentName;
    this._documentType = documentType;
  }

  // 稟議書タイプのアクセサ
  get documentType(): number {
    return this._documentType;
  }

  toString(): string {
    return "[documentName=" + this._documentName + ", documentType=" + this._documentType + "]";
  }
}