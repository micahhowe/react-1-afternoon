import React, { Component } from 'react'

class EvenAndOdd extends Component {
    constructor() {
        super()

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }
        handleChange(val){
            this.setState({userInput: val})
        }
        assignEvenAndOdds(userInput){
            let arr = userInput.split(',');
            //console.log(arr)
            let evenNum = [];
            let oddNum = [];
        
            for ( let i = 0; i < arr.length; i++ ) {
              if ( arr[i] % 2 === 0 ) {
                evenNum.push( parseInt(arr[i], 10) );
              } else {
                oddNum.push( parseInt(arr[i], 10) );
              }
            }
        
            this.setState({ evenArray: evenNum, oddArray: oddNum });
        }
    
    render(){
        
        return(
            <div className="puzzleBox evenAndOddPB">
                <h4> Evens and Odds </h4>
                <input className="inputLine" onChange={(event) => this.handleChange(event.target.value)}></input>
                <button className="confirmationButton" onClick={() => {this.assignEvenAndOdds(this.state.userInput)}}> Split </button>
                <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
             </div>
        )
    }
}

export default EvenAndOdd