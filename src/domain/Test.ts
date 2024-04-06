import IRepository from "../application/IRepository";
import Repository from "../infra/Repository";

export default class Test {
  private readonly repository: IRepository;

  constructor(readonly test: string) {
    // WRONG
    this.repository = new Repository();
  }


  async testCall() {
    await this.repository.test();
  }
}
