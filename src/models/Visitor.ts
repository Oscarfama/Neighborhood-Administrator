export class Visitor {
  name : string;
  lastname: string;
  carplates : string;
  brand : string;
  model : string;
  color : string;
  year : string;
  id : string;

  constructor(obj?: any)
  {
    obj && Object.assign(this, obj);
  }

}
