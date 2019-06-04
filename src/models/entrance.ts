export class Entrance {
  id : string;
  pruserid : string;
  visitorid : string;
  timestamp : string;
  visitorname: string;
  ispreferred: boolean;

  constructor(obj?: any)
  {
    obj && Object.assign(this, obj);
  }

}
