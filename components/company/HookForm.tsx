"use client";

import { useEffect, useState } from 'react';
import styles from './HookForm.module.css';




const HookForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: 0
    })
    const [apiData , setApiData] = useState([]);


    const hanleChange = (event: any) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const fetchApiData = async()=>{
        // fetch("https://jsonplaceholder.typicode.com/users").then((data)=>data.json()).then((json)=>console.log(json))
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setApiData(data);
        
    }
    useEffect(()=>{
        fetchApiData();
    },[])
    console.log('pirintitit')
    return (
        <>
            <h1>lode lage hain bhai tere to, sab bhul gya hai lode ekdum basic bhi</h1>

            <form>
                <input className={styles.inputField} name='name' value={formData.name} onChange={hanleChange} />
                <h1>These are the values that are coming form apis</h1>
                {
                    apiData.map((data:any)=>{
                        return (
                            <>
                            <h3 key={data.id}>{`${data.id}: Name is :${data.name}`} </h3>
                            </>
                        )
                    })
                }
            </form>
        </>
    )
}

export default HookForm;