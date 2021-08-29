export class Singleton {

  private static singleton: Singleton = new Singleton();

  // コンストラクタはprivateにして外部から直接呼ばれないように
  private constructor() {}

  // インスタンス返却用メソッドを作成し、常に固定のインスタンスを返却するように
  public static getInstance(): Singleton {
    return Singleton.singleton;
  }

  public greet(): void {
    console.log('こんにちは');
  }
}