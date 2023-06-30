import axios from "axios"
import { iData } from "./interfaces"

const url: string = "http://localhost:2009/data"


export const readTask = async () => {
    try {
        return await axios.get(url).then((res: any) => {
            return res.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const createTask = async (data: iData) => {
    try {
        return await axios.post(url, data).then((res: any) => {
            return res.data
        })
    } catch (error) {
        console.log(error)
    }
}