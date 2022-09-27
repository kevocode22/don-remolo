import axios from 'axios'

const url= 'http://localhost:4000/'

const pizzasActions={
getPizzas:()=>{
    return async(dispatch, getState)=>{
        const res = await axios.get(url + `api/products`);
        dispatch({ type: "GETPIZZAS", payload: res.data.response })
        // console.log(res.data.response)
    }},

    getOnePizza:(id) =>{
        return async(dispatch, getState)=>{
            const res= await axios.get(url + `api/products/{id}`);
            dispatch({ type: "GETONEPIZZA", payload:res.data.response})
        }
    }

}
export default pizzasActions