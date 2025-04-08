import constants from "@/app/constants";
import axios from "axios";


export async function login(email, password) {
    //todo render error page if server sends error
    try{
        console.log(password);
        console.log(email);
        const response = await axios.post(constants.loginUrl, {
            givenEmail: email, givenPassword: password,
        })
        console.log(response);
        if (response.status === 200) {
            return response.status;
        }else{
            console.log(response);
        }
    }catch (error) {
        console.log(error);
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
        }else{
            console.log(response);
        }
        console.log(response);
    }catch(err){}

}