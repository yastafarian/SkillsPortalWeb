export class AvailSkill {
  _id: string = '';
  title: string = '';
  _v: number;
  people: {username: string,
            level: string}[] = [];

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
