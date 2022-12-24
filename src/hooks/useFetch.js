import { useEffect, useState } from "react";

const useFetch = (url,body,method) => {
const [data,setData] = useState(null);
const [userDetails,setUserDetails] =useState(localStorage.getItem(""));
useEffect(()=>{
fetch(url)
.then((res)=> res.json())
.then((data)=> setData(data))
},[url])

return [data];
}

export default useFetch;