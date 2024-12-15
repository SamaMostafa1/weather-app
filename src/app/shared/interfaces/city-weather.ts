import { forecast } from "./forecast"
export interface cityWeather{
    id:number,
    city:string,
    forecast:forecast[]
}