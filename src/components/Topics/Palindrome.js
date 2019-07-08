import React, { Component} from 'react'

export default class Palindrome extends Component {
    constructor() {
        super();
    
        this.state = {
          userInput: '',
          palindrome: ''
        };
      }
      handleChange(val) {
        this.setState({ userInput: val });
      }
      isPalindrome(userInput) {
        let userString = userInput
        let reversed = userInput
        reversed = reversed.split("")
        reversed = reversed.reverse()
        reversed = reversed.join("")
        if(userString === reversed){
            this.setState({palindrome:'true'})
        } else{
            this.setState({palindrome:'false'})
        }
    }
    
      render() {
        return (
            <div className="puzzleBox palindromePB">
                <h4> Palindrome </h4>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.isPalindrome(this.state.userInput) }> Check </button>
                <span className="resultsBox"> Palindrome: { this.state.palindrome } </span>
          </div>
        )
      }
}