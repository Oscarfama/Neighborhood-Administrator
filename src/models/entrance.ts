export class Entrance {
  id : string;
  preferredUserId : string;
  visitorId : string;
  timestamp : string;
  visitorname: string;
  ispreferred: boolean;

  constructor(obj?: any)
  {
    obj && Object.assign(this, obj);
  }

}
