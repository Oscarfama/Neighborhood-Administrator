export interface Roles {
    resident: boolean;
    guard?: boolean;
}
export class User{
  email: string;
  roles: Roles;

  constructor(authData){
    this.email = authData.email
    this.roles = { resident: true}
  }
}
