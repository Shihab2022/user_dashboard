import { useEffect, useState } from "react"

const useGetChartData=()=>{

    const [chartData,setChartData]=useState([])
useEffect(() =>{
    fetch('chartData.json')
    .then(res=>res.json())
    .then(data=>setChartData(data))
},[])

return [chartData,setChartData]
}

export default useGetChartData;