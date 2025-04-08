import constants from "@/app/constants";
import axios from "axios";


export async function login(email, password) {
    const response = await axios.post(constants.loginUrl, {
        givenEmail: email, givenPassword: password,
    })
    console.log(response);
    if(response.status === 200){
        return response.status;
    }
}

export async function signup(username, email, password) {
    try{
        const response = await axios.post(
            constants.registerUrl,
            {
                userName: username,
                userEmail: email,
                userPassword: password,
            }
        );
        if(response.status === 200){
           return response.status;
        }
        console.log(response);
    }catch(err){}

}