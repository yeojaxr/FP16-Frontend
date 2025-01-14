import { useState, useEffect } from 'react';
import axios from 'axios'; 

export default function useFindUser() {
    const [user, setUser] = useState(null);
    const [isLoading, setLoading] = useState(true);

    const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
    };

    useEffect(() =>{
        async function findUser() {
        await axios.get('/user', { withCredentials: true, config })
        .then(res => {
            setUser(res.data.currentUser);
            setLoading(false);
        }).catch(err => {
            console.log(err);
            setLoading(false);
        });
        }
        
        findUser();  
    }, []);
    
    return {
        user,
        setUser,
        isLoading
    }
}