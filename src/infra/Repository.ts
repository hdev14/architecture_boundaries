import IRepository from "../application/IRepository";

export default class Repository implements IRepository {
  async test(): Promise<void> {
    console.log('test');
  }
}