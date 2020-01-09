import React, {useState} from "react";

import { axiosWithAuth } from '../utils/axiosWithAuth'
import Loader from 'react-loader-spinner'
import axios from 'axios'
class Register extends React.Component {

  state = {
    credentials: {

        email: '',
        password: '',
        firstname: '',
        lastname: ''
    },
    isFetching: false
}
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
    // fake user
    // username: name
    // password: password
    // email: "so@some.com"
    // password: "$2a$10$VI9f921UQuuiCElRX8KD/OhsrZXpoOMvyvnlvpXni0Fq/2Jvokniq"
    // firstName: "eee"
    // lastName: "fff"
 
    // email: "soeee@some.com"
    // password: "$2eeea$10$VI9f921UQuuiCElRX8KD/OhsrZXpoOMvyvnlvpXni0Fq/2Jvokniq"
    // firstName: "eee"
    // lastName: "fff"

    // email: "soeee@seeeome.com"
    // password: "$2eeea$10$VI9eeef921UQuuiCElRX8KD/OhsrZXpoOMvyvnlvpXni0Fq/2Jvokniq"
    // firstName: "eee"
    // lastName: "fff"


    // email: "soe444ee@seeeome.com"
    // password: "$2ee444ea$10$VI9eeef921UQuuiCElRX8KD/OhsrZXpoOMvyvnlvpXni0Fq/2Jvokniq"
    // firstName: "eee"
    // lastName: "fff"


    register = e => {
        e.preventDefault();
        this.setState({
          isFetching: true
        })
      //   console.log(localStorage.getItem('token'))
        // const token = localStorage.getItem('token')
        // if(!token) {
        //   //   console.log('have to use username and password')
        //     axiosWithAuth()
        //     // axios
        //     .post('/register', this.state.credentials)
        //     // .post(`https://reqres.in/api/registerWeightLiftingBW`, this.state.credentials)
        //     .then(res => {
        //         console.log(res, res.data.payload)
        //         // localStorage.setItem('token', res.data.payload)
        //         this.props.history.push('/exercises')
        //         console.log(this.props.history)
        //     })
        //     .catch(err =>  console.log('problem', err))
        //     } else{
        //     //   console.log('let user in')
        //         this.props.history.push('/exercises')
    
        //     }
        axiosWithAuth()
            // axios
            .post('/register', this.state.credentials)
            // .post(`https://reqres.in/api/registerWeightLiftingBW`, this.state.credentials)
            .then(res => {
                console.log(res, res.data.payload)
                // localStorage.setItem('token', res.data.payload)
                this.props.history.push('/login')
                console.log(this.props.history)
            })
        
  
      }

  render() {
    return (
      <div>
          {/* email, password, firstname, lastname */}
        <h1>Welcome to the Fitness App!</h1>

        <form onSubmit={this.register}>
        <input
                type="text"
                name="email"
                value={this.state.credentials.email}
                onChange={this.handleChange}
                placeholder='email'
  
            />
            <input
                type="password"
                name="password"
                value={this.state.credentials.password}
                onChange={this.handleChange}
                placeholder='password'
  
            />
             <input
                type="text"
                name="firstname"
                value={this.state.credentials.firstname}
                onChange={this.handleChange}
                placeholder='firstname'
  
            />
             <input
                type="text"
                name="lastname"
                value={this.state.credentials.lastname}
                onChange={this.handleChange}
                placeholder='lastname'
  
            />
            <button>register</button>
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
  }
  
};

export default Register;
