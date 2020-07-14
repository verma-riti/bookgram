import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { useHistory,Route, Redirect } from "react-router-dom";

import Login from './components/login';
import Home from './components/home';


function App() {
  const history = useHistory();
  useEffect(() => {
    let isLoggedIn = localStorage.getItem('isLoggedIn');
    if(isLoggedIn){
      history.push('/login');
    }else{
      history.push('/');
    }
  },[])

  const pages = [
    {
      pageLink: '/',
      view: Home
    },
    {
      pageLink: '/login',
      view: Login
    }
  ];


  return (
    <div className="App">
      <Route 
      render={({location}) => (
        <div className="Almighty-Router">
          <Route exact path="/" render={() => <Redirect to="/" />} />
          
          {pages.map((page, i) => {
            return (<Route 
                    exact
                    path={page.pageLink}
                    component={page.view}
                    key={i}
                    />
                    );
          })}
        </div>
      )}
    />
    </div>
  );
}

export default App;
