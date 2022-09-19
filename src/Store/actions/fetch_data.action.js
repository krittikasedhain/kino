import axios from "axios";
import axiosBase from "../../axiosBase";

const fetch_data = () =>{ 
  return async (dispatch, getState) => {
  try {
    
    const res = await axiosBase.get(
      "kino/past_drawings.php"
    );

    console.log(res)
    return res.data;
  } catch (err) {
    // handling the error over here
    console.log({...err})
    return false ;
  }
}}

export default fetch_data;
