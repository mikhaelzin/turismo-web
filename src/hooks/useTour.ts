import { useQuery } from "react-query"
import { api } from "../services/api"

export type Tour={
    _id: string
		address: string
		latLong: string
		locationName:string
		images: string[]
		imageCover: string
		description: string
		summary: string
		price: number
		maxGroupSize:number
		duration:number
		slug: string
		name: string
}
 
const getTour = async(slug:string|undefined)=>{

    const {data} = await api.get(`tours/${slug}`)
    return data

}
export default function useTour(slug:string|undefined){

    return useQuery<Tour,Error>(['tour',slug],()=>getTour(slug))

}