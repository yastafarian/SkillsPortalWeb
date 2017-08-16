import { Skill } from './skill'

export class Person {
  name: string = '';
  username: string = '';
  skills: Skill[] = [];

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
