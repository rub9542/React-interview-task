import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      Username:'',
      Password:''
    }
    this.handleSubmit=this.handleSubmit.bind(this)
  }
  handleSubmit(event) {
    console.log('submit is woking');
    alert('Username and Password are submitted: ' + this.state.Username + this.state.Password);
    event.preventDefault();
  }
  render() {
    return (
      <div className="App" >
        <form className='recipe' onSubmit={()=> this.handleSubmit()}>
          <label>
          Username: 
            <input type='text' value={this.state.value} placeholder='type username here' className='inputs' onChange={()=>this.setState({Username:event.target.value})}/>
          </label>
           <label> 
           Password:  
          <input type='password' value={this.state.value} placeholder='type username here' className='inputs' onChange={()=>this.setState({Password:event.target.value})}/>
           </label>
              
            
          <input type='submit' value='submit'/>
          
          
        </form>
      
      </div>
    );
  }
}

export default App;
