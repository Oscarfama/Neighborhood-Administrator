export class Entrance {
  id : string;
  preferredUserId : string;
  visitorId : string;
  timestamp : string;

  constructor(obj?: any)
  {
    obj && Object.assign(this, obj);
  }

}
