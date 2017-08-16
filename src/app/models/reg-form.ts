export class RegForm {
  email: String;
  name: String;
  username: String;
  password: String;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

}
