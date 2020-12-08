export class User {
  constructor(
    public id: number = 0,
    public username: string,
    public first_name: string,
    public last_name:string,
    public email:string,
    public password:string,
    public profile_pic?:string,
    public bio?:string,
    public local_area?:string,
    public city_town?:string,
    public country?:string,
    public hood_id?:number,
    public is_superuser:boolean = false,
    public is_staff:boolean = false,
    public is_active:boolean = false,
  ) {  }
}
