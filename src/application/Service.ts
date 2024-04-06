import IRepository from "./IRepository";

export default class Service {
  constructor(readonly repository: IRepository) { }

  async test() {
    await this.repository.test();
  }
}