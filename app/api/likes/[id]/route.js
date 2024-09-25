import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";


export const POST = async (req, {params}) => {

    try {
        connectToDB();
       
    } catch (error) {
        
    }
    
}

export const DELETE = async () => {
    
}