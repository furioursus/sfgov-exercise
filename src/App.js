import React, { Component } from 'react';
import './App.css';
import axios from "axios";

import HousingList from './components/HousingList';

class App extends Component {
  constructor() {
    super();

    this.state = {
      housingList: []
    }
  }

  /* 
    Determines if the total number of housing units is greater than or equal to 
    affordable ones. If they aren’t, we’re going to assume that there is an error 
    in the data and return a `0` value.
  */
  affordableUnitsEval(affordableUnits, totalUnits) {
    const aUnits = Number(affordableUnits);
    const tUnits = Number(totalUnits);
    if (aUnits <= tUnits) {
      return aUnits;
    } else {
      return 0;
    }
  }

  /* 
    Determines what percentage of the houses are affordable units versus how many 
    there are total in this node.
  */
  unitPercentageEvaluation(affordableUnits, totalUnits) {
    const aUnits = Number(affordableUnits);
    const tUnits = Number(totalUnits);
    if (aUnits > 0 && tUnits > 0) {
      return Math.round((aUnits / tUnits) * 100) + "%"; 
    } else {
      return "None";
    }
  }
  
  /* 
    Axios call to get list of housing, then storing it in state so that we can
    later modify the display with filters for sorting the data.
  */
  async componentDidMount() {
    const response = await axios("https://data.sfgov.org/resource/9rdx-httc.json");
    const housingList = response.data;
    this.setState({ housingList })
  }

  render() {
    return (
      <div className="App">
        <HousingList
          affordableUnitsEval={this.affordableUnitsEval}
          unitPercentageEvaluation={this.unitPercentageEvaluation}
          listings={this.state.housingList} />
      </div>
    );
  }
}

export default App;
