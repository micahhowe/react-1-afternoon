import React, { Component } from 'react'

class FilterString extends Component {
    constructor() {
        super();
    
        this.state = {
          names: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
          userInput: '',
          filteredNames: []
        };
      }
      handleChange(value){
        this.setState({userInput: value})
    }
    filterNames(userInput){
        let prevNames = this.state.names
        let tempArr = []
        for(let i=0; i<prevNames.length;i++){
            if(prevNames[i].includes(userInput)){
                tempArr.push(prevNames[i])
            }
        }
        this.setState({filteredNames: tempArr})
    }
    render(){
        return(
        <div className="puzzleBox filterStringPB">
        <h4> Filter String </h4>
            <span className="puzzleText"> Names: { JSON.stringify(this.state.names, null, 10) } </span>
            <input className="inputLine" onChange={(event) => this.handleChange(event.target.value)}></input>
            <button className="confirmationButton" onClick={() => this.filterNames(this.state.userInput)}> Filter </button>
            <span className="resultsBox filterStringRB"> Filtered Names: { JSON.stringify(this.state.filteredNames, null, 10) } </span>
        </div>
        )
    }
}

export default FilterString