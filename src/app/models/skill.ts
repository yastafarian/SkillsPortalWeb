export class Skill {
  title: string = '';
  level: string = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
