export interface humanDatabaseProps{
    humanIndentification: string
    humanName: string 
    humanAge: number
    humanGender: string
    humanEmail: string
    humanPhone: string
    humanLocation: humanDatabaseLocationProps
    humanLogin:humanDatabaseLoginProps
}
export interface humanDatabaseLoginProps {
    humanUserName:string;
    humanPassword:string;
}
export interface humanDatabaseLocationProps{
    humanStreetName: string
    humanStreetNumber: number
    humanCountry: string
    humanState: string
    humanPostCode:string
}
export interface resultsProps {
    results:humanProps[]
}
export interface humanProps{
   id:idprops,
   name:nameprops,
   location:locationprops,
   phone:string,
   email:string,
   gender:string,
   dob:dobProps,
   login:loginProps,
}
export interface idprops{
    value:string
}
export interface nameprops{
    first:string,
    last:string
}
export interface locationprops{
    street:streetprops,
    state:string,
    country:string,
    postcode:string
}
export interface streetprops{
    name:string,
    number:number,
}
export interface dobProps{
    age:number
}
export interface loginProps{
    username:string,
    password:string,
}
export interface countryNamesProps{
    [abreviation: string]: string;
}