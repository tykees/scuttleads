import React, { useEffect, useState } from 'react'
import GlobalApi from '../_utils/GlobalApi'

function AdPlans() {

    const [adsList, setAdsList] = useState([]);
    useEffect(()=>{
        getAllThePlans();
    },[])

    const getAllThePlans=()=> {
        GlobalApi.getAllAdsPlan().then(resp=>{
            console.log(resp?.adsplans);
            setAdsList(resp?.adsplans)
        })
    }
  return (
    <div>
        <div>
            {adsList.map((item, index)=> (
                <div key={index}>
                    <div>{item.name}</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default AdPlans