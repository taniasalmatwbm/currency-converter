import { useState, useEffect } from "react";

//currency hame khud se deni h usd ya inr
function useCurrencyInfo(currency){
    const [data, setData]=useState({})
//ab ham chate hn koi esi hook use kare jis mein
// jesy hi component re-render/ya did mount hu / hamra data a jaye
// es k liye useEffect use hu ga
useEffect(()=>{
  fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
  .then((res)=>res.json())
  //jo b state se aye slection mein usi ko nikaly 
  .then((res)=>setData(res[currency]))
  //console.log(data);
  //useEffect dependencies jb ham upr wali currency ko change kare gy to ya dobra update hu jaye ga
 },[currency]) 

  console.log(data);
 return data
}


export default useCurrencyInfo;