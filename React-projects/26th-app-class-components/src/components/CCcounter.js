import React, { Component } from 'react'

export default class CCcounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         score:0,
         wickets:0,
      }
    }
    componentDidMount(){
        console.log("CCCounter loaded");
    }
    componentWillUnmount(){
        console.log("CCCounter will unload")
    }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate");
        return true;
       }

    componentDidUpdate(){
        console.log("component has been updated");
    }

    
    
  render() {
   console.log("render")
    return (
        <div className='counter'>
        <h3>CCCounter</h3>
        <h1>Score:{this.state.score}</h1>
        <h1>Wickets:{this.state.wickets}</h1>
        <button onClick={()=>{
            this.setState({score:this.state.score+1});
        }}>Increment Score</button>

        <button onClick={()=>{
             this.setState({score:this.state.score-1});
           
        }}>Decrement Score</button>
        <br></br>
        <br></br>

       <button onClick={()=>{
         this.setState({wickets:this.state.wickets+1});
           
        }}>Increment Wickets</button>
    
        <button onClick={()=>{
           this.setState({wickets:this.state.wickets-1});
        }}>Decrement Wickets</button>

    </div>
    )
  }
}
