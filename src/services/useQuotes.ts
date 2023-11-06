import { useQuery } from "@tanstack/react-query"
import axios from "axios"

interface Slip {
    id:number
    advice:string
}
interface Response {
    slip:Slip
}
const UseQuotes = () => {
    return useQuery<Response,Error>({
        queryKey: ["quotes"],
        queryFn: () => 
            axios.get<Response>("https://api.adviceslip.com/advice")
                .then(res => res.data),
        staleTime:1000,
        keepPreviousData:true
    })
}
export default UseQuotes