import { useState, useEffect, useReducer } from 'react'
import { useHistory } from 'react-router-dom'




const Quick_Search = () => {
    
    const [orderId, setOrderId] = useState('');
    const nav = useHistory();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setOrderId(value)
    }
    const changePath = (e) => {
        
        console.log("in the quick search")
        let path = '/orders';

        console.log(e.target.value)
        nav.push(path, {orderId: parseInt(orderId)} );

    }

    return(<>
    
        <div className = "quickSearch">

            <h2>Quick Search</h2>
            <h4>Enter Order ID</h4>

            <div>
                <input type="text"
                    name='orderId'
                    value={orderId}
                    onChange = {(e) => handleChange(e)}
                ></input>
                <button type ="button" onClick ={(e) => changePath(e)}>Go</button>
            </div>
        </div>
        
        


    </>)
}


export default Quick_Search