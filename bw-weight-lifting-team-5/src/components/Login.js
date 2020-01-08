import React, {useState} from "react";

import { axiosWithAuth } from '../utils/axiosWithAuth'
import Loader from 'react-loader-spinner'
import Button from 'react-bootstrap/Button'

class Login extends React.Component {

  state = {
    credentials: {
        username: '',
        password: ''
    },
    isFetching: false
}

simulateNetworkRequest= () => {
    return new Promise(resolve => setTimeout(resolve, 2000));
  }
  
LoadingButton=() => {
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      if (isLoading) {
        simulateNetworkRequest().then(() => {
          setLoading(false);
        });
      }
    }, [isLoading]);
  
    const handleClick = () => setLoading(true);
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  

  handleChange = e => {

    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
    console.log(this.state)
  }

  login = e => {
      e.preventDefault();
      this.setState({
        isFetching: true
      })
    //   console.log(localStorage.getItem('token'))
      const token = localStorage.getItem('token')
      if(!token) {
        //   console.log('have to use username and password')
          axiosWithAuth()
        .post('/login', this.state.credentials)
        .then(res => {
          localStorage.setItem('token', res.data.payload)
          this.props.history.push('/exercises')
        })
        .catch(err =>  console.log(err))
      } else{
        //   console.log('let user in')
          this.props.history.push('/exercises')

      }
      

    };

    

  
    return (
      <div>
        <h1>Fitness!</h1>
        <p>Your training tracked</p>
        <form onSubmit={this.login}>
            <input
                type="text"
                name="username"
                value={this.state.credentials.username}
                onChange={this.handleChange}
                placeholder='username'
  
            />
            <input
                type="password"
                name="password"
                value={this.state.credentials.password}
                onChange={this.handleChange}
                placeholder='password'
  
            />
            <ButtonToolbar>
                <Button 
                    variant='primary' 
                    size='lg'
                    disabled={isLoading}
                    onClick={!isLoading ? handClick : null}
                >
                    {isLoading ? 'Logging in...' : 'Login'}
                </Button>
            </ButtonToolbar>
            
            {this.state.isFetching && 
                <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                //  timeout={3000} //3 secs
    
            /> 
            }
        </form>
      </div>
    );
  };
  
};
render(<LoadingButton />); 
export default Login;