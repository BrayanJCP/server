export class Chair{
    constructor(
    public name:string,
    public color:string,
    public soportes:number,
    public material:string,
    public precio:number,
    public tipo:string,
    public createDate:Date=new Date()){}
}