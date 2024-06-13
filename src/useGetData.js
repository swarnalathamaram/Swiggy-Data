import { useEffect, useState } from "react";


function useGetData(url){
    let [data,setData] = useState([])
    async function getData(){
        let apiData = await fetch(url)
        let jsonData = await apiData.json()
        setData(jsonData)
        console.log(jsonData)
    }
    useEffect(()=>{
        getData()
    },[])
    return data
}
export default useGetData
