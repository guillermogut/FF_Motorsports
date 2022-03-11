import { useEffect, useState, useReducer} from 'react'
import '../App.css';

const Login = () => {
    
    

    return (<>
        <form>

            <div className="formDiv">
                <h2>Login</h2>
                <label>User</label>
                <input></input>
                <label>Password</label>
                <input></input>
                <button type="submit">Submit</button>
            </div>
            
        </form>
    
    </>)
}

export default Login;