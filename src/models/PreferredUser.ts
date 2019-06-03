export class PreferredUser {
  name : string;
  carplates : string;
  brand : string;
  model : string;
  color : string;


  constructor(obj)
  {
    obj && Object.assign(this, obj);
  }
}
