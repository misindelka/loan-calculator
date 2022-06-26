// external imports
import axios from "axios"

// internal imports
import {constraintsAPI,offerAPI} from "./urls"

interface IConstraints {
     amountInterval:{ defaultValue: number, max: number , min: number, step: number},
     termInterval:{ defaultValue: number, max: number , min: number, step: number}
    
}

export const getConstraintsData= async () => {
     const response = await axios.get<IConstraints>(constraintsAPI)
     return response.data
}

export const getLoanOffer = async (params:any) => {
     const response = await axios.get(offerAPI+`${params}`)

     return response.data
}