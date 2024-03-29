import React,{useState,useEffect} from 'react'
import rgbToHex from './utils';
export default function SingleColor({rgb,weight,index,hexColor}) {

    const[alert,setAlert]= useState(false);
    useEffect(()=>{
        const timeout= setTimeout(()=>{
            setAlert(false);
        },3000)
        return ()=> clearTimeout(timeout);
    },[alert])
    const bcg = rgb.join(',');
    const hex = rgbToHex(...rgb);
    const hexValue = `#${hexColor}`;
    return (
     <article  className={`color ${index>10 && 'color-light'}`}style={{backgroundColor:`rgb(${bcg})`}}
     onClick={()=>{
         setAlert(true);
         navigator.clipboard.writeText(hexValue);
         console.log(hexValue);
     }}>
     <p className='percent-value'>{weight}%</p>
     <p className='color-value'>{hex}</p>
     {alert && <p className="alert">copied to clipboard</p>}
     </article>
    )
}
