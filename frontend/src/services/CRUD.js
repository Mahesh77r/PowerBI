import axios from 'axios';

const URL = 'https://powerbi-256r.onrender.com';
const LOCALURL = 'http://localhost:8080';


export const addReport = async(formdata) =>{
    try{
      console.log(formdata)
  
      return await axios.post(`${URL}/addreports`,formdata)
    }
    catch(err){
        console.log(formdata)
      console.log(`Error occur during adding Prodcut ${err}`)
    }
  }
export const fetchReport = async(name) =>{
  
      // id can be null if we need to view all user
      name = name || '';
      try{
         return await axios.get(`${URL}/getreports/${name}`);
      }
      catch(err){
          console.log("Error occurs while running fetching Products function",err);
      }
  };
export const updateProduct = async(id,formdata) =>{
    try{
      id = id || '';
      console.log(id)
      return await axios.put(`${URL}/updateproducts/${id}`,formdata)
      
    }
    catch(err){
      console.log(`Error occur during updating product ${err}`)
    }
  };
export const deleteProduct = async(id) =>{
    // id can be null if we need to view all user
    id = id || '';
    try{
       return await axios.delete(`${URL}/deleteproducts/${id}`);
    }
    catch(err){
        console.log("Error occurs while running fetching products function",err);
    }
  };