import { useQuery } from "react-query"
import { api } from "../services/api"

type Tour={
    _id: string
		locationName:string
		imageCover: string
		summary: string
		price: number
		maxGroupSize:number
		duration:number
		slug: string
		name: string
}
 
const getTours = async()=>{

    const {data} = await api.get('tours')
    return data

}
export default function useTours(){

    return useQuery<Tour[],Error>('tours',getTours)

}