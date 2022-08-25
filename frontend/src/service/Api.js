import axios from 'axios';
const URL ='http://localhost:3008'; 



//register data
export const addData= async (data)=> {

  console.log("Api calling....!!"+data);

      try {
            console.log("Api calling.url");
            return await axios.post(`${URL}/view`, data);                     
      } catch (error) {
        console.log("Error while calling Api registration : ",error);
      }
}
