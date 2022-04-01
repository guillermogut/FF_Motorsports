import { useEffect, useState, useReducer } from 'react'
import '../App.css';
import { useHistory } from 'react-router-dom'
const axios = require('axios')

const defaultUserPass = {
    username: '',
    password: ''
}
const Login = (props) => {
    
    const [name_pass, setName_pass] = useState(defaultUserPass);
    const nav = useHistory();
    let result = null;
    const auth = async () => {
        
        try {
            const res = await axios.get('/authenticate', { auth: { username: name_pass.username, password: name_pass.password } });
            props.handleChangeUser(res.data.user)
            props.toggleNavBar()
        } catch (e) {
            console.log(e);
        }
    };
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setName_pass({...name_pass,[name]:value})
    }
    const handleAuth = () => {
        auth();
        nav.push('/')
    }
    useEffect(() => {
    }, [name_pass])
    
    useEffect(() => {
        
    },[])
    return (<>
        <form>

            <div className="formDiv">
                <h2>Login</h2>

                <label>User Name</label>
                <input type="text"
                name='username'
                value={name_pass.username}
                onChange={handleChange}></input>

                <label>Password</label>
                <input type="password"
                name='password'
                value={name_pass.password}
                onChange={handleChange}></input>
                <button type="button" onClick = {() =>handleAuth()}>Submit</button>
            </div>
            
        </form>
    
    </>)
}

export default Login;