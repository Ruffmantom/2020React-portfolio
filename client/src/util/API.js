import axios from "axios";

export default{
    saveContact:function(data){
        return axios.post("/email", {
            fullName:data.fullName,
            email:data.email,
            message:data.message
        })
    }
}