import axios from 'axios';
const URL ='http://localhost:3008'; 

//register data
export const addData= async (data)=> {

  console.log("Api calling....!!"+data);

      try {
            console.log("Api calling.url");
             await axios.post(`${URL}/resgiter_data`, data);
             
      } catch (error) {
        console.log("Error while calling Api registration : ",error);
      }
}
