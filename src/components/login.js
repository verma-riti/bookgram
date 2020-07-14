import React, {useState, useEffect} from  'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";


function Login() {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [isLoggedIn, setIsLoggedIn] = useState(false)
  const history = useHistory();


	const onSubmit = (e) => {
    var data ={
      'username':username,
      'password':password
    }
    
    const  headers= {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    

		axios.post('https://apertum-interview.herokuapp.com/api/user/login', data, {headers: headers})
      .then(function (response) {
        console.log(response)
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('isLoggedIn', true);
        setIsLoggedIn(true);
        history.push('/');
      })
      .catch(error=> {
        console.log(error);
        if(e.code === 'ECONNABORTED'){
          console.log("req get cancelled");
        }
      });
      e.preventDefault();
	}
	

	return(
		<div className="login-page">
       <div className="form">
          <h1>Login</h1>
          <form onSubmit={onSubmit} className="login-form">
            <input
              type="text"
              placeholder="Enter your username"
              name="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter your password"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>

          </form>
        </div>
		</div>
	)
}

export default Login